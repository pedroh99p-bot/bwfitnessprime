import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdirSync } from "node:fs";
import {
  calculateBMI,
  recommendPlan,
  recommendationMessage,
  answerLabels,
} from "../src/lib/training";
import { buildWhatsAppUrl } from "../src/config/siteContent";
import type { Goal, Frequency, Preference } from "../src/types/content";
async function ready(page: Page) {
  await page.goto("/");
  await expect(page.locator(".hero-rating")).toHaveCSS("opacity", "1");
}
test("24 profiles, BMI boundaries and WhatsApp encoding", () => {
  const outputs = new Set<string>();
  for (const goal of [
    "emagrecer",
    "ganhar_massa",
    "condicionamento",
    "saude",
  ] as Goal[])
    for (const frequency of ["2x", "3x", "4x_plus"] as Frequency[])
      for (const preference of [
        "acompanhamento",
        "autonomia",
      ] as Preference[]) {
        const a = { goal, frequency, preference };
        outputs.add(recommendPlan(a));
        expect(recommendationMessage(a)).toContain(recommendPlan(a));
        expect(
          answerLabels(a).every((x) => x !== "Ainda não escolhido"),
        ).toBeTruthy();
        if (goal === "saude" || frequency === "2x")
          expect(recommendPlan(a)).toBe("START");
      }
  expect([...outputs].sort()).toEqual(["PERFORMANCE", "PRIME", "START"]);
  expect(
    recommendPlan({
      goal: "ganhar_massa",
      frequency: "4x_plus",
      preference: "autonomia",
    }),
  ).toBe("PERFORMANCE");
  expect(
    recommendPlan({
      goal: "ganhar_massa",
      frequency: "4x_plus",
      preference: "acompanhamento",
    }),
  ).toBe("PRIME");
  expect(calculateBMI(75, 175)).toBeCloseTo(24.4898, 4);
  for (const [w, h] of [
    [75, 0],
    [NaN, 175],
    [-1, 175],
    [400, 175],
  ])
    expect(calculateBMI(w, h)).toBeNull();
  const url = new URL(buildWhatsAppUrl("Olá! Teste & ação")!);
  expect(url.pathname).toBe("/5521969017896");
  expect(url.searchParams.get("text")).toBe("Olá! Teste & ação");
  expect(buildWhatsAppUrl("Teste", "")).toBeNull();
});
for (const width of [360, 390, 430, 768, 1024, 1280, 1440]) {
  test(`layout ${width}px: images, anchors, overflow, screenshots, console`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.setViewportSize({ width, height: width < 768 ? 844 : 960 });
    await ready(page);
    await expect
      .poll(() =>
        page
          .locator(".navbar img")
          .evaluate(
            (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
          ),
      )
      .toBe(true);
    mkdirSync("artifacts/qa", { recursive: true });
    await page.screenshot({ path: `artifacts/qa/hero-${width}.png` });
    for (const id of [
      "encontre-seu-treino",
      "estrutura",
      "equipe",
      "modalidades",
      "metodo",
      "planos",
      "avaliacoes",
      "imc",
      "localizacao",
      "horarios",
      "faq",
      "comece",
    ]) {
      await page.locator("#" + id).scrollIntoViewIfNeeded();
      expect(
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth <=
            document.documentElement.clientWidth + 1,
        ),
        id,
      ).toBe(true);
    }
    const broken = await page
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links
          .map((a) => a.getAttribute("href")!)
          .filter((h) => !document.getElementById(h.slice(1))),
      );
    expect(broken).toEqual([]);
    await page.screenshot({
      path: `artifacts/qa/full-${width}.png`,
      fullPage: true,
      animations: "disabled",
    });
    expect(errors).toEqual([]);
    await expect(page.locator("footer")).toContainText(
      "PROJETO PRODUZIDO POR MONTANA",
    );
  });
}
test("mobile finder, back, recommendations and matching plan anchor", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await ready(page);
  await page.getByRole("button", { name: "Abrir menu", exact: true }).click();
  await page
    .getByRole("navigation", { name: "Navegação mobile" })
    .getByRole("link", { name: "Modalidades" })
    .click();
  await expect(page.locator("dialog[open]")).toHaveCount(0);
  const f = page.locator("#encontre-seu-treino");
  await f.scrollIntoViewIfNeeded();
  await expect(f.getByRole("button", { name: "Continuar" })).toBeDisabled();
  await f.getByRole("button", { name: /^Ganhar massa/ }).click();
  await f.getByRole("button", { name: "Continuar" }).click();
  await f.getByRole("button", { name: /^4x ou mais/ }).click();
  await f.getByRole("button", { name: "Voltar" }).click();
  await expect(
    f.getByRole("button", { name: /^Ganhar massa/ }),
  ).toHaveAttribute("aria-pressed", "true");
  await f.getByRole("button", { name: "Continuar" }).click();
  await expect(f.getByRole("button", { name: /^4x ou mais/ })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await f.getByRole("button", { name: "Continuar" }).click();
  await f.getByRole("button", { name: /^Mais autonomia/ }).click();
  await f.getByRole("button", { name: "Ver recomendação" }).click();
  await expect(
    f.getByRole("heading", { name: "PLANO PERFORMANCE" }),
  ).toBeVisible();
  await expect(f.getByRole("progressbar")).toHaveAttribute(
    "aria-valuenow",
    "3",
  );
  const url = new URL(
    (await f
      .getByRole("link", { name: "Falar com a equipe" })
      .getAttribute("href"))!,
  );
  for (const text of [
    "Ganhar massa",
    "4x ou mais",
    "Mais autonomia",
    "PERFORMANCE",
  ])
    expect(url.searchParams.get("text")).toContain(text);
  await page.screenshot({ path: "artifacts/qa/result-390.png" });
  await f.getByRole("link", { name: "Conhecer plano" }).click();
  await expect(page.locator("#plano-performance")).toBeInViewport();
  await f.getByRole("button", { name: "Refazer minhas escolhas" }).click();
  await expect(f.getByRole("button", { name: "Continuar" })).toBeDisabled();
});
test("tabs, dialog focus, assistant, FAQ keyboard and IMC validation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await ready(page);
  await page.getByRole("tab", { name: /Cardio/ }).click();
  await expect(page.getByRole("tabpanel")).toContainText(
    "Foto oficial de cardio",
  );
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tab", { name: /Funcional/ })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await page
    .getByRole("button", { name: "Conhecer especialista BW 1" })
    .click();
  const sheet = page.getByRole("dialog", {
    name: "Especialista BW",
    exact: true,
  });
  await expect(
    sheet.getByRole("img", { name: /Retrato ilustrativo de Wellington/ }),
  ).toBeVisible();
  await expect(sheet).not.toContainText("CREF");
  await page.screenshot({ path: "artifacts/qa/sheet-390.png" });
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press("Tab");
    expect(
      await sheet.evaluate((el) => el.contains(document.activeElement)),
    ).toBeTruthy();
  }
  await page.keyboard.press("Escape");
  await expect(sheet).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "Conhecer especialista BW 1" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Abrir assistente BW" }).click();
  await page
    .getByRole("navigation", { name: "Atalhos do assistente" })
    .getByRole("link", { name: "Ver horários" })
    .click();
  await expect(page.locator("dialog[open]")).toHaveCount(0);
  await expect(page.locator("#horarios")).toBeInViewport();
  await page.getByLabel("PESO", { exact: true }).fill("80");
  await page.getByLabel("ALTURA", { exact: true }).fill("180");
  await expect(page.locator(".bmi-value")).toHaveText("24,7");
  await page.getByLabel("ALTURA", { exact: true }).fill("0");
  await expect(page.locator(".bmi-value")).toHaveText("—");
  await page.getByLabel("PESO", { exact: true }).fill("75,5");
  await page.getByLabel("ALTURA", { exact: true }).fill("175");
  await expect(page.locator(".bmi-value")).toHaveText("24,7");
  const faq = page.getByRole("button", {
    name: /Posso fazer aula experimental/,
  });
  await faq.focus();
  await page.keyboard.press("Enter");
  await expect(faq).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Space");
  await expect(faq).toHaveAttribute("aria-expanded", "false");
});
test("mouse drag, arrow keys, autoplay and pause", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 960 });
  await ready(page);
  const rail = page.getByRole("region", { name: "Modalidades", exact: true });
  await rail.scrollIntoViewIfNeeded();
  await rail.focus();
  await page.keyboard.press("ArrowRight");
  await expect
    .poll(() => rail.evaluate((el) => el.scrollLeft))
    .toBeGreaterThan(50);
  const before = await rail.evaluate((el) => el.scrollLeft);
  const box = (await rail.boundingBox())!;
  await page.mouse.move(box.x + box.width * 0.75, box.y + 90);
  await page.mouse.down();
  await page.mouse.move(box.x + 40, box.y + 90, { steps: 15 });
  await page.mouse.up();
  await expect
    .poll(() => rail.evaluate((el) => el.scrollLeft))
    .toBeGreaterThan(before + 80);
  const reviews = page.getByRole("region", { name: "Avaliações", exact: true });
  await reviews.scrollIntoViewIfNeeded();
  await page.mouse.move(1, 1);
  const start = await reviews.evaluate((el) => el.scrollLeft);
  await expect
    .poll(() => reviews.evaluate((el) => el.scrollLeft))
    .toBeGreaterThan(start + 12);
  await page.getByRole("button", { name: "Pausar avaliações" }).click();
  const stop = await reviews.evaluate((el) => el.scrollLeft);
  await page.waitForTimeout(450);
  expect(await reviews.evaluate((el) => el.scrollLeft)).toBeCloseTo(stop, 0);
});
test("reduced motion and accessibility at 390 and 1440", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 960 });
    await ready(page);
    await expect(page.locator(".roller-track").first()).toHaveCSS(
      "animation-name",
      "none",
    );
    const rail = page.getByRole("region", { name: "Avaliações", exact: true });
    await rail.scrollIntoViewIfNeeded();
    const before = await rail.evaluate((el) => el.scrollLeft);
    await page.waitForTimeout(400);
    expect(await rail.evaluate((el) => el.scrollLeft)).toBe(before);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
  }
});
