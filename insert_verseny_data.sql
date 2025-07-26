-- INSERT statements for VesenyKategoria and VesenyNevek tables with dummy data

-- Insert VesenyKategoria records
INSERT INTO veseny_kategoria (id, nev, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Műszaki versenyek', NOW(), 'system', NULL, NULL),
('550e8400-e29b-41d4-a716-446655440002', 'Informatikai versenyek', NOW(), 'system', NULL, NULL),
('550e8400-e29b-41d4-a716-446655440003', 'Gazdasági versenyek', NOW(), 'system', NULL, NULL),
('550e8400-e29b-41d4-a716-446655440004', 'Egészségügyi versenyek', NOW(), 'system', NULL, NULL),
('550e8400-e29b-41d4-a716-446655440005', 'Közlekedési versenyek', NOW(), 'system', NULL, NULL),
('550e8400-e29b-41d4-a716-446655440006', 'Kereskedelmi versenyek', NOW(), 'system', NULL, NULL),
('550e8400-e29b-41d4-a716-446655440007', 'Turisztikai versenyek', NOW(), 'system', NULL, NULL),
('550e8400-e29b-41d4-a716-446655440008', 'Mezőgazdasági versenyek', NOW(), 'system', NULL, NULL);

-- Insert VesenyNevek records
INSERT INTO veseny_nevek (id, nev, kategoria_id, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
-- Műszaki versenyek
('660e8400-e29b-41d4-a716-446655440001', 'Országos Szakmai Tanulmányi Verseny - Gépészet', '550e8400-e29b-41d4-a716-446655440001', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440002', 'Országos Szakmai Tanulmányi Verseny - Építőipar', '550e8400-e29b-41d4-a716-446655440001', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440003', 'Országos Szakmai Tanulmányi Verseny - Elektrotechnika', '550e8400-e29b-41d4-a716-446655440001', NOW(), 'system', NULL, NULL),

-- Informatikai versenyek
('660e8400-e29b-41d4-a716-446655440004', 'Országos Szakmai Tanulmányi Verseny - Informatika', '550e8400-e29b-41d4-a716-446655440002', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440005', 'WorldSkills Hungary - Webfejlesztés', '550e8400-e29b-41d4-a716-446655440002', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440006', 'Programozási verseny', '550e8400-e29b-41d4-a716-446655440002', NOW(), 'system', NULL, NULL),

-- Gazdasági versenyek
('660e8400-e29b-41d4-a716-446655440007', 'Országos Szakmai Tanulmányi Verseny - Kereskedelem', '550e8400-e29b-41d4-a716-446655440003', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440008', 'Pénzügyi verseny', '550e8400-e29b-41d4-a716-446655440003', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440009', 'Vállalkozói verseny', '550e8400-e29b-41d4-a716-446655440003', NOW(), 'system', NULL, NULL),

-- Egészségügyi versenyek
('660e8400-e29b-41d4-a716-446655440010', 'Országos Szakmai Tanulmányi Verseny - Egészségügy', '550e8400-e29b-41d4-a716-446655440004', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440011', 'Ápolási verseny', '550e8400-e29b-41d4-a716-446655440004', NOW(), 'system', NULL, NULL),

-- Közlekedési versenyek
('660e8400-e29b-41d4-a716-446655440012', 'Országos Szakmai Tanulmányi Verseny - Közlekedés', '550e8400-e29b-41d4-a716-446655440005', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440013', 'Közúti közlekedési verseny', '550e8400-e29b-41d4-a716-446655440005', NOW(), 'system', NULL, NULL),

-- Kereskedelmi versenyek
('660e8400-e29b-41d4-a716-446655440014', 'Értékesítési verseny', '550e8400-e29b-41d4-a716-446655440006', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440015', 'Ügyfélszolgálati verseny', '550e8400-e29b-41d4-a716-446655440006', NOW(), 'system', NULL, NULL),

-- Turisztikai versenyek
('660e8400-e29b-41d4-a716-446655440016', 'Országos Szakmai Tanulmányi Verseny - Turizmus', '550e8400-e29b-41d4-a716-446655440007', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440017', 'Idegenvezetői verseny', '550e8400-e29b-41d4-a716-446655440007', NOW(), 'system', NULL, NULL),

-- Mezőgazdasági versenyek
('660e8400-e29b-41d4-a716-446655440018', 'Országos Szakmai Tanulmányi Verseny - Mezőgazdaság', '550e8400-e29b-41d4-a716-446655440008', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440019', 'Kertészeti verseny', '550e8400-e29b-41d4-a716-446655440008', NOW(), 'system', NULL, NULL),
('660e8400-e29b-41d4-a716-446655440020', 'Állattenyésztési verseny', '550e8400-e29b-41d4-a716-446655440008', NOW(), 'system', NULL, NULL);

-- Insert versenyek (Competition results)
INSERT INTO versenyek (id, helyezett_1, helyezett_1_3, "dontobeJutott", "nevezettekSzama", tanev_kezdete, alapadatok_id, "versenyNev_id", "createAt", "createBy", "updatedAt", "updatedBy") VALUES
-- Pollák Antal Technikum versenyek
('aa0e8400-e29b-41d4-a716-446655440001', 2, 5, 8, 25, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440004', NOW(), 'system', NULL, NULL),
('aa0e8400-e29b-41d4-a716-446655440002', 1, 3, 6, 18, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440005', NOW(), 'system', NULL, NULL),
('aa0e8400-e29b-41d4-a716-446655440003', 0, 2, 4, 15, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440006', NOW(), 'system', NULL, NULL),

-- Jedlik Ányos Technikum versenyek
('aa0e8400-e29b-41d4-a716-446655440004', 3, 7, 12, 30, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440001', NOW(), 'system', NULL, NULL),
('aa0e8400-e29b-41d4-a716-446655440005', 1, 4, 8, 22, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440003', NOW(), 'system', NULL, NULL),

-- Kereskedelmi és Vendéglátóipari Technikum versenyek
('aa0e8400-e29b-41d4-a716-446655440006', 2, 6, 10, 28, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440007', NOW(), 'system', NULL, NULL),
('aa0e8400-e29b-41d4-a716-446655440007', 1, 2, 5, 16, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440016', NOW(), 'system', NULL, NULL),

-- Egészségügyi Szakképző Iskola versenyek
('aa0e8400-e29b-41d4-a716-446655440008', 4, 8, 15, 35, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440010', NOW(), 'system', NULL, NULL),
('aa0e8400-e29b-41d4-a716-446655440009', 2, 3, 7, 20, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440011', NOW(), 'system', NULL, NULL),

-- Mezőgazdasági Technikum versenyek
('aa0e8400-e29b-41d4-a716-446655440010', 3, 5, 9, 24, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440018', NOW(), 'system', NULL, NULL),
('aa0e8400-e29b-41d4-a716-446655440011', 1, 4, 6, 18, 2023, '2e31291b-7c2d-4bd8-bdca-de8580136874', '660e8400-e29b-41d4-a716-446655440019', NOW(), 'system', NULL, NULL);

-- Insert NSZFH measurements
INSERT INTO nszfh_meresek (id, alapadatok_id, tanev_kezdete, kat_1_mat_bemeneti, kat_1_mat_kimeneti, kat_1_szoveg_bemeneti, kat_1_szoveg_kimeneti, 
                           kat_2_mat_bemeneti, kat_2_mat_kimeneti, kat_2_szoveg_bemeneti, kat_2_szoveg_kimeneti,
                           kat_3_mat_bemeneti, kat_3_mat_kimeneti, kat_3_szoveg_bemeneti, kat_3_szoveg_kimeneti,
                           kat_4_mat_bemeneti, kat_4_mat_kimeneti, kat_4_szoveg_bemeneti, kat_4_szoveg_kimeneti,
                           kat_5_mat_bemeneti, kat_5_mat_kimeneti, kat_5_szoveg_bemeneti, kat_5_szoveg_kimeneti,
                           "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('bb0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 65, 78, 70, 82, 58, 72, 62, 75, 45, 68, 52, 71, 38, 58, 42, 62, 28, 48, 35, 55, NOW(), 'system', NULL, NULL),
('bb0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 72, 85, 68, 79, 63, 76, 59, 73, 52, 71, 48, 67, 41, 63, 38, 59, 32, 52, 29, 48, NOW(), 'system', NULL, NULL),
('bb0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 58, 73, 61, 76, 48, 65, 52, 69, 38, 58, 42, 61, 28, 48, 32, 52, 18, 38, 22, 42, NOW(), 'system', NULL, NULL),
('bb0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 68, 81, 72, 84, 55, 71, 58, 74, 42, 65, 45, 68, 32, 55, 36, 58, 22, 42, 25, 45, NOW(), 'system', NULL, NULL),
('bb0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 61, 76, 64, 77, 51, 68, 54, 70, 39, 61, 43, 64, 29, 51, 33, 54, 19, 39, 23, 43, NOW(), 'system', NULL, NULL);

-- Insert Elhelyezkedes (Graduate placement) data
INSERT INTO "elhelyezkedes" (id, alapadatok_id, tanev_kezdete, szakirany_id, szakma_id, elhelyezkedok_szama, szakmai_okatatasban_sikeresen_vegzettek_szama, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('cc0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 28, 32, NOW(), 'system', NULL, NULL),
('cc0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 24, 29, NOW(), 'system', NULL, NULL),
('cc0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 35, 38, NOW(), 'system', NULL, NULL),
('cc0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 42, 45, NOW(), 'system', NULL, NULL),
('cc0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 31, 36, NOW(), 'system', NULL, NULL),
('cc0e8400-e29b-41d4-a716-446655440006', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 29, 33, NOW(), 'system', NULL, NULL);

-- Insert Elegedettseg (Employer satisfaction) data
INSERT INTO "elegedettseg" (id, alapadatok_id, tanev_kezdete, szakirany_id, szakma_id, munkaadok_elegedettsege, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('dd0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 4.2, NOW(), 'system', NULL, NULL),
('dd0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 4.5, NOW(), 'system', NULL, NULL),
('dd0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 4.1, NOW(), 'system', NULL, NULL),
('dd0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 4.3, NOW(), 'system', NULL, NULL),
('dd0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 4.6, NOW(), 'system', NULL, NULL),
('dd0e8400-e29b-41d4-a716-446655440006', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 4.0, NOW(), 'system', NULL, NULL);

-- Insert VizsgaEredmenyek (Exam results) data
INSERT INTO "vizsgaeredmenyek" (id, alapadatok_id, tanev_kezdete, szakirany_id, szakma_id, szakmai_vizsga_eredmeny, agazati_alapvizsga_eredmeny, 
                               magyar_nyelv_eretsegi_eredmeny, matematika_eretsegi_eredmeny, tortenelem_eretsegi_eredmeny, 
                               angol_nyelv_eretsegi_eredmeny, agazati_szakmai_eretsegi_eredmeny, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('ee0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 78.5, 82.3, 75.2, 68.9, 71.4, 69.8, 80.1, NOW(), 'system', NULL, NULL),
('ee0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 81.2, 79.6, 73.8, 71.5, 69.2, 72.3, 83.7, NOW(), 'system', NULL, NULL),
('ee0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 76.9, 84.1, 78.3, 65.7, 74.2, 71.6, 79.8, NOW(), 'system', NULL, NULL),
('ee0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 83.4, 81.7, 76.9, 69.3, 72.8, 74.5, 85.2, NOW(), 'system', NULL, NULL),
('ee0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 75.6, 78.9, 72.1, 66.8, 70.5, 68.2, 77.3, NOW(), 'system', NULL, NULL);

-- Insert SzakmaiVizsgaEredmenyek (Professional exam results) data
INSERT INTO "szakmai_vizsga_eredmenyek" (id, alapadatok_id, tanev_kezdete, szakirany_id, szakma_id, vizsgara_bocsathatoak_szama, sikeres_vizsgazok_szama, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('ff0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 35, 32, NOW(), 'system', NULL, NULL),
('ff0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 28, 26, NOW(), 'system', NULL, NULL),
('ff0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 42, 38, NOW(), 'system', NULL, NULL),
('ff0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 38, 35, NOW(), 'system', NULL, NULL),
('ff0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 45, 41, NOW(), 'system', NULL, NULL),
('ff0e8400-e29b-41d4-a716-446655440006', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 33, 29, NOW(), 'system', NULL, NULL);

-- Insert Lemorzsolodas (Dropout) data
INSERT INTO "lemorzsolodas" (id, alapadatok_id, tanev_kezdete, szakirany_id, szakma_id, lemorzsolodo_tanulok_szama, oktober_es_belepett_tanulok_szama, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('ab0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 8, 120, NOW(), 'system', NULL, NULL),
('ab0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 5, 98, NOW(), 'system', NULL, NULL),
('ab0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 12, 145, NOW(), 'system', NULL, NULL),
('ab0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 7, 132, NOW(), 'system', NULL, NULL),
('ab0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 3, 89, NOW(), 'system', NULL, NULL),
('ab0e8400-e29b-41d4-a716-446655440006', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 'e5974021-7744-4783-941d-c20f73f2ef64', '27a651c4-cb36-496c-b381-79e45fca57f7', 9, 156, NOW(), 'system', NULL, NULL);

-- Insert ElegedettsegMeres (Satisfaction measurement) data
INSERT INTO "elegedettseg_meres" (id, alapadatok_id, tanev_kezdete, szulok_elegedettsege, oktatok_elegedettsege, tanulok_elegedettsege, dualis_kepzohely_elegedettsege, munkaero_piac_elegedettsege, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('ac0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 4.3, 4.1, 3.9, 4.2, 4.0, NOW(), 'system', NULL, NULL),
('ac0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 4.5, 4.3, 4.1, 4.4, 4.2, NOW(), 'system', NULL, NULL),
('ac0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 4.2, 4.0, 3.8, 4.1, 3.9, NOW(), 'system', NULL, NULL),
('ac0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 4.6, 4.4, 4.3, 4.5, 4.3, NOW(), 'system', NULL, NULL),
('ac0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 4.1, 3.9, 3.7, 4.0, 3.8, NOW(), 'system', NULL, NULL);

-- Insert IntezmenyiNeveltseg (Institutional education level) data
INSERT INTO "intezmenyi_neveltseg" (id, alapadatok_id, tanev_kezdete, osztaly_jele, igazolatlan_ora, oktato_testuleti_dicseret, oktatoi_dicseret, osztalyfonoki_dicseret, igazagatoi_dicseret, oktato_testuleti_figyelmeztetes, oktatoi_figyelmeztetes, osztalyfonoki_figyelmeztetes, osztalyfonoki_intes, osztalyfonoki_megrovas, igazgatoi_figyelmeztetes, igazgatoi_intes, igazgatoi_megrovas, fegyelmi_eljaras, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('ad0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, '9.A', 45, 12, 25, 8, 3, 5, 15, 3, 1, 0, 2, 0, 0, 0, NOW(), 'system', NULL, NULL),
('ad0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, '10.B', 38, 8, 18, 5, 2, 3, 12, 2, 1, 1, 1, 0, 0, 0, NOW(), 'system', NULL, NULL),
('ad0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, '11.A', 52, 15, 28, 10, 4, 7, 18, 4, 2, 1, 3, 1, 0, 0, NOW(), 'system', NULL, NULL),
('ad0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, '12.C', 29, 18, 32, 12, 5, 2, 8, 1, 0, 0, 1, 0, 0, 0, NOW(), 'system', NULL, NULL),
('ad0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, '9.E', 41, 10, 22, 7, 2, 4, 14, 2, 1, 0, 2, 0, 0, 0, NOW(), 'system', NULL, NULL),
('ad0e8400-e29b-41d4-a716-446655440006', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, '10.M', 35, 14, 26, 9, 3, 3, 11, 2, 0, 1, 1, 0, 0, 0, NOW(), 'system', NULL, NULL);

-- Insert HHEsHHHTanulok (Disadvantaged students) data
INSERT INTO "hhes_hhh_tanulok" (id, alapadatok_id, tanev_kezdete, hh_tanulo_letszam, tanuloi_osszletszam, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('ae0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 45, 280, NOW(), 'system', NULL, NULL),
('ae0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 52, 320, NOW(), 'system', NULL, NULL),
('ae0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 38, 265, NOW(), 'system', NULL, NULL),
('ae0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 29, 195, NOW(), 'system', NULL, NULL),
('ae0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 41, 245, NOW(), 'system', NULL, NULL);

-- Insert SajatosNevelesuTanulok (Students with special educational needs) data
INSERT INTO "sajatos_nevelesu_tanulok" (id, alapadatok_id, tanev_kezdete, sni_tanulok_szama, tanulok_osszesen, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('af0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 18, 280, NOW(), 'system', NULL, NULL),
('af0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 22, 320, NOW(), 'system', NULL, NULL),
('af0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 15, 265, NOW(), 'system', NULL, NULL),
('af0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 12, 195, NOW(), 'system', NULL, NULL),
('af0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 16, 245, NOW(), 'system', NULL, NULL);

-- Insert Dobbanto (Repeating students) data
INSERT INTO "dobbanto" (id, alapadatok_id, tanev_kezdete, dobbanto_szama, tanulok_osszesen, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('ba0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 8, 280, NOW(), 'system', NULL, NULL),
('ba0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 12, 320, NOW(), 'system', NULL, NULL),
('ba0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 6, 265, NOW(), 'system', NULL, NULL),
('ba0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 4, 195, NOW(), 'system', NULL, NULL),
('ba0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 9, 245, NOW(), 'system', NULL, NULL);

-- Insert Muhelyiskola (Workshop school) data
INSERT INTO "muhelyiskola" (id, alapadatok_id, tanev_kezdete, reszszakmat_szerezok_szama, muhelyiskola_tanuloi_osszletszam, "createAt", "createBy", "updatedAt", "updatedBy") VALUES
('bc0e8400-e29b-41d4-a716-446655440001', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 25, 45, NOW(), 'system', NULL, NULL),
('bc0e8400-e29b-41d4-a716-446655440002', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 32, 58, NOW(), 'system', NULL, NULL),
('bc0e8400-e29b-41d4-a716-446655440003', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 18, 35, NOW(), 'system', NULL, NULL),
('bc0e8400-e29b-41d4-a716-446655440004', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 0, 0, NOW(), 'system', NULL, NULL),
('bc0e8400-e29b-41d4-a716-446655440005', '2e31291b-7c2d-4bd8-bdca-de8580136874', 2023, 28, 52, NOW(), 'system', NULL, NULL);