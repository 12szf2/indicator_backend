-- Migration: add_intezmenyi_elismeresek_13
-- Indicator 13: Intézményi Elismerések (dinamikus díjak + fix munkavállalói kategóriák)

-- Intézmény által elnyert díjak, elismerések (dinamikus sorokkal)
CREATE TABLE "intezmenyi_elismeresek" (
    "id"            UUID NOT NULL DEFAULT gen_random_uuid(),
    "alapadatok_id" UUID NOT NULL,
    "tanev_kezdete"  SMALLINT NOT NULL,
    "dij_neve"      VARCHAR(200) NOT NULL,
    "darabszam"     INTEGER NOT NULL DEFAULT 0,
    "createAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy"      TEXT,
    "updatedAt"     TIMESTAMP(3),
    "updatedBy"     TEXT,

    CONSTRAINT "intezmenyi_elismeresek_pkey" PRIMARY KEY ("id")
);

-- Munkavállalók által elnyert díjak (fix 7 sor, tanévenként 1 rekord / iskola)
CREATE TABLE "munkavallalok_elismeresek" (
    "id"                                  UUID NOT NULL DEFAULT gen_random_uuid(),
    "alapadatok_id"                       UUID NOT NULL,
    "tanev_kezdete"                       SMALLINT NOT NULL,
    "itm_miniszteri_elismero_oklevel"     INTEGER NOT NULL DEFAULT 0,
    "itm_szakkepzesert_dij"               INTEGER NOT NULL DEFAULT 0,
    "kim_miniszter_elismero_oklevele"     INTEGER NOT NULL DEFAULT 0,
    "kim_szakkepzesert_dij"               INTEGER NOT NULL DEFAULT 0,
    "kim_oktatoi_szolgalati_emlekazerem"  INTEGER NOT NULL DEFAULT 0,
    "pedagogus_szolgalati_emlekazerem"    INTEGER NOT NULL DEFAULT 0,
    "hszc_kivalosagi_dij"                 INTEGER NOT NULL DEFAULT 0,
    "createAt"                            TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy"                            TEXT,
    "updatedAt"                           TIMESTAMP(3),
    "updatedBy"                           TEXT,

    CONSTRAINT "munkavallalok_elismeresek_pkey" PRIMARY KEY ("id")
);

-- Unique constraint: egy iskolához és egy tanévhez csak egy munkavállalói rekord tartozhat
ALTER TABLE "munkavallalok_elismeresek"
    ADD CONSTRAINT "munkavallalok_elismeresek_alapadatok_id_tanev_kezdete_key"
    UNIQUE ("alapadatok_id", "tanev_kezdete");

-- Foreign key constraints
ALTER TABLE "intezmenyi_elismeresek"
    ADD CONSTRAINT "intezmenyi_elismeresek_alapadatok_id_fkey"
    FOREIGN KEY ("alapadatok_id") REFERENCES "Alapadatok"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "munkavallalok_elismeresek"
    ADD CONSTRAINT "munkavallalok_elismeresek_alapadatok_id_fkey"
    FOREIGN KEY ("alapadatok_id") REFERENCES "Alapadatok"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;

-- Indexes for performance
CREATE INDEX "intezmenyi_elismeresek_alapadatok_id_idx"
    ON "intezmenyi_elismeresek"("alapadatok_id");

CREATE INDEX "intezmenyi_elismeresek_alapadatok_tanev_idx"
    ON "intezmenyi_elismeresek"("alapadatok_id", "tanev_kezdete");

CREATE INDEX "munkavallalok_elismeresek_alapadatok_id_idx"
    ON "munkavallalok_elismeresek"("alapadatok_id");
