import axios from "axios";
import React, { useState } from "react";

export default function Test() {
  const [db_add, setdb_add] = useState("");
  const [db_mother, setdb_mother] = useState("");
  const [db_father, setdb_father] = useState("");
  const [db_phone, setdb_phone] = useState("");
  const [db_code, setdb_code] = useState("");
  const [db_province, setdb_province] = useState("");
  const [db_county, setdb_county] = useState("");
  const [db_district, setdb_district] = useState("");
  const [db_road, setdb_road] = useState("");
  const [db_alley, setdb_alley] = useState("");
  const [db_y, setdb_y] = useState("");
  const [db_d, setdb_d] = useState("");
  const [db_home, setdb_home] = useState("");
  const [db_m, setdb_m] = useState("");
  const [db_job, setdb_job] = useState("");
  const [db_class, setdb_class] = useState("");
  const [db_password, setdb_password] = useState("");
  const [db_name, setdb_name] = useState("");
  const [db_date, setdb_date] = useState("");
  const [db_level, setdb_level] = useState("");

  const add = () => {
    axios.post("http://119.59.100.51/plesk-site-preview/www.repair1.xyz/https/119.59.100.51/db/post", {
   db_add,
   db_mother,
   db_father,
   db_phone,
   db_code,
   db_province,
   db_county,
   db_district,
   db_road,
   db_alley,
   db_y,
   db_d,
   db_home,
   db_m,
   db_job,
   db_class,
   db_password,
   db_name,
   db_date,
   db_level,
      })
      .then((res) => console.log(res));
  };

  return (
    <div>
      <input
        type="text"
        value={db_add}
        onChange={(e) => setdb_add(e.target.value)}
      />

      <input
        type="text"
        value={db_mother}
        onChange={(e) => setdb_mother(e.target.value)}
      />
      <input
        type="text"
        value={db_father}
        onChange={(e) => setdb_father(e.target.value)}
      />
      <input
        type="text"
        value={db_phone}
        onChange={(e) => setdb_phone(e.target.value)}
      />
      <input
        type="text"
        value={db_code}
        onChange={(e) => setdb_code(e.target.value)}
      />
      <input
        type="text"
        value={db_province}
        onChange={(e) => setdb_province(e.target.value)}
      />
      <input
        type="text"
        value={db_county}
        onChange={(e) => setdb_county(e.target.value)}
      />
      <input
        type="text"
        value={db_district}
        onChange={(e) => setdb_district(e.target.value)}
      />
      <input
        type="text"
        value={db_road}
        onChange={(e) => setdb_road(e.target.value)}
      />
      <input
        type="text"
        value={db_alley}
        onChange={(e) => setdb_alley(e.target.value)}
      />
      <input
        type="text"
        value={db_y}
        onChange={(e) => setdb_y(e.target.value)}
      />
      <input
        type="text"
        value={db_d}
        onChange={(e) => setdb_d(e.target.value)}
      />
      <input
        type="text"
        value={db_home}
        onChange={(e) => setdb_home(e.target.value)}
      />
      <input
        type="text"
        value={db_m}
        onChange={(e) => setdb_m(e.target.value)}
      />
      <input
        type="text"
        value={db_job}
        onChange={(e) => setdb_job(e.target.value)}
      />
      <input
        type="text"
        value={db_class}
        onChange={(e) => setdb_class(e.target.value)}
      />
      <input
        type="text"
        value={db_password}
        onChange={(e) => setdb_password(e.target.value)}
      />
      <input
        type="text"
        value={db_name}
        onChange={(e) => setdb_name(e.target.value)}
      />
      <input
        type="text"
        value={db_date}
        onChange={(e) => setdb_date(e.target.value)}
      />
      <input
        type="text"
        value={db_level}
        onChange={(e) => setdb_level(e.target.value)}
      />
      <button onClick={add}>click</button>
    </div>
  );
}
