--  extract(year from now())

INSERT INTO loads(
  container_number,
  container_supplier,
  departure_number,
  item_name,
  item_count,
  item_packages_count,
  item_netto_kg,
  item_brutto_kg,
  item_volume,
  item_supplier,
  client,
  status,
  total_volume,
  total_netto,
  total_brutto
)VALUES
(1, 'lochin corparation', '48961646', '{bolta, mix, truba}', '{5, 50, 10}', '{1, 5, 2}', '{20, 10, 80}', '{25, 15, 85}', '{5, 10, 30}', '{Shanhai company, Hyosong company, Tenchan company}', '{Shohruh, Aziz, Bobur}', 2, '4894', '56664', '4646'),
(2, 'Qoyilmaqom corparation', '58941646', '{gipskarton, mix, stul}', '{5, 50, 10}', '{1, 5, 2}', '{30, 20, 90}', '{35, 25, 95}', '{10, 20, 40}', '{Syojong company, Pekin company, Tenchan company}', '{Junsang, Jumong, Bobur}', 1, '4894', '56664', '4646'),
(3, 'Fast corparation', '58941646', '{bolta, mix, truba}', '{5, 50, 10}', '{1, 5, 2}', '{30, 20, 90}', '{35, 25, 95}', '{10, 20, 40}', '{Syojong company, Pekin company, Tenchan company}', '{Aziz, Jumong, Junsang}', 4, '4894', '56664', '4646'),
(4, 'Birnima corparation', '58941646', '{samarez, bolta, stul}', '{5, 50, 10}', '{1, 5, 2}', '{30, 20, 90}', '{35, 25, 95}', '{10, 20, 40}', '{Syojong company, Pekin company, Tenchan company}', '{Shohruh, Jumong, Bobur}', 3, '4894', '56664', '4646');

INSERT INTO containers(
 container_number,
 container_type,
 container_price,
 container_comment,
 supplier
)VALUES 
('QWER159124', 'truck', '$7000', 'fe sefesf fsefa gvraaaaaaas  fwaf', 'BEST LOGISTIC'),
('HTML464123', 'big truck', '$6500', 'fe sefesf fsefa gvraaaaaaas  fwaf', 'FAST LOGISTIC'),
('RFSG159124', 'truck', '$9000', 'fe sefesf fsefa gvraaaaaaas  fwaf', 'SPECIAL LOGISTIC'),
('WRIJ155894', 'small truck', '$4000', 'fe sefesf fsefa gvraaaaaaas  fwaf', 'EASY LOGISTIC');

INSERT INTO items(
  item_name,
  item_manufacturer,
  item_comment
)VALUES
('mix', 'jweonewi', 'moa nionin fw39ubf naklf'),
('samarez', 'jweonewi', 'nioa nioan 89ghuwe na'),
('bolta', 'jweonewi', 'noie nio we89bg vbuw9pe'),
('stul', 'jweonewi', 'iaow nioweffw  fw3f 3qf'),
('truba', 'jweonewi', 'byui xr6 guiot f67 7mi'),
('gipskarton', 'jweonewi', 'miw0f jnuaiov juioaebu');


INSERT INTO suppliers(
  supplier_name,
  supplier_comment
)VALUES
('Shanhai company', 'moa nionin fw39ubf naklf'),
('Hyosong company', 'nioa nioan 89ghuwe na'),
('Tenchan company', 'noie nio we89bg vbuw9pe'),
('Pekin', 'iaow nioweffw  fw3f 3qf'),
('Syojong company', 'byui xr6 guiot f67 7mi');

INSERT INTO clients(
  client_name,
  client_comment
)VALUES
('Shohruh', 'moa nionin fw39ubf naklf'),
('Aziz', 'nioa nioan 89ghuwe na'),
('Bobur', 'noie nio we89bg vbuw9pe'),
('Junsang', 'iaow nioweffw  fw3f 3qf'),
('Jumong', 'byui xr6 guiot f67 7mi');

INSERT INTO vehicle_types(
  vehicle_type_name,
  vehicle_type_comment
)VALUES
('Big truck', 'moa nionin fw39ubf naklf'),
('truck', 'nioa nioan 89ghuwe na'),
('Small truck', 'noie nio we89bg vbuw9pe');

INSERT INTO statuses(
  status_name,
  status_comment
)VALUES
('loading', 'moa nionin fw39ubf naklf'),
('loaded', 'nioa nioan 89ghuwe na'),
('rejected', 'noie nio we89bg vbuw9pe'),
('denied', 'noie nio we89bg vbuw9pe');

INSERT INTO currencies(
  currency_name,
  currency_comment
)VALUES
('sum', 'noie nio we89bg vbuw9pe'),
('yuan', 'moa nionin fw39ubf naklf'),
('dollar', 'nioa nioan 89ghuwe na'),
('rubl', 'noie nio we89bg vbuw9pe');