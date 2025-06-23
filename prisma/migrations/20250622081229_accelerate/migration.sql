-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "permissions" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "alapadatokId" UUID,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_access" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "tableName" VARCHAR(100) NOT NULL,
    "access" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "table_access_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "method" VARCHAR(10) NOT NULL,
    "path" VARCHAR(255) NOT NULL,
    "statusCode" SMALLINT,
    "body" JSONB,
    "query" JSONB,
    "headers" JSONB,
    "ip" VARCHAR(45) NOT NULL,
    "userAgent" VARCHAR(255) NOT NULL,
    "duration" INTEGER,
    "level" VARCHAR(10) NOT NULL DEFAULT 'INFO',
    "correlationId" VARCHAR(50),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alapadatok" (
    "id" UUID NOT NULL,
    "iskola_neve" VARCHAR(150) NOT NULL,
    "intezmeny_tipus" VARCHAR(50) NOT NULL,

    CONSTRAINT "Alapadatok_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Szakirany" (
    "id" UUID NOT NULL,
    "nev" VARCHAR(75) NOT NULL,

    CONSTRAINT "Szakirany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Szakma" (
    "id" UUID NOT NULL,
    "nev" VARCHAR(75) NOT NULL,

    CONSTRAINT "Szakma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tanulo_Letszam" (
    "id" UUID NOT NULL,
    "alapadatok_id" UUID NOT NULL,
    "tanev_kezdete" SMALLINT NOT NULL,
    "jogv_tipus" SMALLINT NOT NULL,
    "letszam" SMALLINT NOT NULL,
    "szakirany_id" UUID NOT NULL,
    "szakma_id" UUID NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" TEXT,

    CONSTRAINT "Tanulo_Letszam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tanar_Letszam" (
    "id" UUID NOT NULL,
    "alapadatok_id" UUID NOT NULL,
    "tanev_kezdete" SMALLINT NOT NULL,
    "letszam" SMALLINT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" TEXT,

    CONSTRAINT "Tanar_Letszam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Felvettek_Szama" (
    "id" UUID NOT NULL,
    "alapadatok_id" UUID NOT NULL,
    "tanev_kezdete" SMALLINT NOT NULL,
    "szakma_id" UUID NOT NULL,
    "szakiranyId" UUID,
    "jelentkezo_letszam" SMALLINT NOT NULL,
    "felveheto_letszam" SMALLINT NOT NULL,
    "felvett_letszam" SMALLINT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" TEXT,

    CONSTRAINT "Felvettek_Szama_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kompetencia" (
    "id" UUID NOT NULL,
    "tanev_kezdete" SMALLINT NOT NULL DEFAULT 0,
    "mat_orsz_p" TEXT NOT NULL,
    "szoveg_orsz_p" TEXT NOT NULL,
    "mat_int_p" TEXT NOT NULL,
    "szoveg_int_p" TEXT NOT NULL,
    "kepzes_forma" TEXT NOT NULL,
    "alapadatok_id" UUID NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" TEXT,

    CONSTRAINT "Kompetencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tanugyi_Adatok" (
    "id" UUID NOT NULL,
    "elotag" TEXT,
    "vezeteknev" TEXT,
    "utonev" TEXT,
    "oktatasiAzonositoja" TEXT,
    "osztaly" TEXT,
    "szuletesiDatuma" TEXT,
    "anyjaSzuletesiDatuma" TEXT,
    "tanterv" TEXT,
    "naploSorszam" TEXT,
    "beiras_naplo_sorszam" TEXT,
    "felvetel_taneve" TEXT,
    "torzslapszam" TEXT,
    "tanulo_jogviszonya" TEXT,
    "jogviszony_kezdete" TEXT,
    "jogviszony_megszunesenek_varhato_datuma" TEXT,
    "jogviszonyátSzunetelteto" TEXT,
    "tankotelezettsegetTeljesito" TEXT,
    "tankotelezettségVege" TEXT,
    "bejaro" TEXT,
    "Szakmai_gyakorlaton_tartozkodik" TEXT,
    "Egyeni_munkarend" TEXT,
    "Egyeni_munkarend_oka" TEXT,
    "Egyeni_munkarend_kezdete" TEXT,
    "Egyeni_munkarend_vege" TEXT,
    "Vendegtanulo" TEXT,
    "tandijat_fizeto" TEXT,
    "teritesi_dijat_fizeto" TEXT,
    "tanuloszerzodeses" TEXT,
    "polgari_szerzodeses" TEXT,
    "iskolai_sportkorben_reszt_vevo_tanulo" TEXT,
    "evfolyamismetlo" TEXT,
    "elozo_intezmeny" TEXT,
    "osztaly1" TEXT,
    "evfolyam" TEXT,
    "bizonyitvany_sorszama" TEXT,
    "okleveles_technikus_képzes" TEXT,
    "uj_Szkt_agazat_tipusa" TEXT,
    "uj_szkt_szakma_tipusa" TEXT,
    "uj_szkt_szakmairany_tipusa" TEXT,
    "nkt_tanulmanyi_terulet" TEXT,
    "nkt_szakkepesites" TEXT,
    "nkt_szakirany" TEXT,
    "agazat_uj_szkt_reszszakmahoz" TEXT,
    "szakma_reszszakmahoz" TEXT,
    "reszszakma" TEXT,
    "agazat_tanulmanyi_terulet" TEXT,
    "szakmai_kepzes" TEXT,
    "agazati_alapoktatas_megnevezese" TEXT,
    "agazati_alapvizsga_eredmeny" TEXT,
    "agazati_alapvizsga_teljesitesenek_datuma" TEXT,
    "agazati_alapvizsga_eredmenye" TEXT,
    "agazati_alapvizsga_eredmenye_percent" TEXT,
    "szakkepzesi_munkaszerzodessel" TEXT,
    "Dualis_kepzohely_neve" TEXT,
    "Dualis_kepzohely_adoszama" TEXT,
    "kiemelten_tehetseges" TEXT,
    "szamitogepet_tanulasi_oktatasi_celra_hasznal" TEXT,
    "szaboky_adolf_szakkepzesi_osztondijban_reszesul" TEXT,
    "egesz_napos_iskolai_oktatasban_reszesul" TEXT,
    "nyelvi_elokeszito" TEXT,
    "ket_tanitasi_nyelvu" TEXT,
    "NemzetisegiNevelesOktatas" TEXT,
    "NemzetisegiNevelesOktatásFajtaja" TEXT,
    "nemzetisegiNyelv" TEXT,
    "nemzetisegNyelvenFolyoSzakmaiOktatas" TEXT,
    "sportosztaly" TEXT,
    "aranyjanostehetseggondozoprogram" TEXT,
    "arany_janos_kollegiumi_program" TEXT,
    "munkarend" TEXT,
    "alapadatok_id" UUID NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" TEXT,
    "a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte" TEXT,
    "tanev_kezdete" SMALLINT NOT NULL DEFAULT 0,

    CONSTRAINT "Tanugyi_Adatok_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "logs_createdAt_level_idx" ON "logs"("createdAt", "level");

-- CreateIndex
CREATE INDEX "logs_userId_idx" ON "logs"("userId");

-- CreateIndex
CREATE INDEX "logs_path_idx" ON "logs"("path");

-- CreateIndex
CREATE UNIQUE INDEX "Szakirany_nev_key" ON "Szakirany"("nev");

-- CreateIndex
CREATE UNIQUE INDEX "Szakma_nev_key" ON "Szakma"("nev");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_alapadatokId_fkey" FOREIGN KEY ("alapadatokId") REFERENCES "Alapadatok"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_access" ADD CONSTRAINT "table_access_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tanulo_Letszam" ADD CONSTRAINT "Tanulo_Letszam_alapadatok_id_fkey" FOREIGN KEY ("alapadatok_id") REFERENCES "Alapadatok"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tanulo_Letszam" ADD CONSTRAINT "Tanulo_Letszam_szakirany_id_fkey" FOREIGN KEY ("szakirany_id") REFERENCES "Szakirany"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tanulo_Letszam" ADD CONSTRAINT "Tanulo_Letszam_szakma_id_fkey" FOREIGN KEY ("szakma_id") REFERENCES "Szakma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tanar_Letszam" ADD CONSTRAINT "Tanar_Letszam_alapadatok_id_fkey" FOREIGN KEY ("alapadatok_id") REFERENCES "Alapadatok"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Felvettek_Szama" ADD CONSTRAINT "Felvettek_Szama_alapadatok_id_fkey" FOREIGN KEY ("alapadatok_id") REFERENCES "Alapadatok"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Felvettek_Szama" ADD CONSTRAINT "Felvettek_Szama_szakma_id_fkey" FOREIGN KEY ("szakma_id") REFERENCES "Szakma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Felvettek_Szama" ADD CONSTRAINT "Felvettek_Szama_szakiranyId_fkey" FOREIGN KEY ("szakiranyId") REFERENCES "Szakirany"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kompetencia" ADD CONSTRAINT "Kompetencia_alapadatok_id_fkey" FOREIGN KEY ("alapadatok_id") REFERENCES "Alapadatok"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tanugyi_Adatok" ADD CONSTRAINT "Tanugyi_Adatok_alapadatok_id_fkey" FOREIGN KEY ("alapadatok_id") REFERENCES "Alapadatok"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
