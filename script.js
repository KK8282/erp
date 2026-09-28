function toggleMobileHomeMenu() {
  const menu = document.getElementById('mobileHomeMenu');
  if (menu) menu.classList.toggle('hidden');
}

function toggleMobileNav() {
  const sidebar = document.getElementById('mainSidebar');
  const backdrop = document.getElementById('mobileBackdrop');
  if (!sidebar) return;
  
  const isOpen = !sidebar.classList.contains('-translate-x-full');
  if (isOpen) {
    sidebar.classList.add('-translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
  } else {
    sidebar.classList.remove('-translate-x-full');
    if (backdrop) backdrop.classList.remove('hidden');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('aec_theme', theme);

  const icon1 = document.getElementById('themeToggleIcon');
  const text1 = document.getElementById('themeToggleText');
  const icon2 = document.getElementById('themeToggleIcon2');

  if (theme === 'dark') {
    if (icon1) icon1.className = 'fa-solid fa-sun text-amber-400';
    if (text1) text1.textContent = 'Light Mode';
    if (icon2) icon2.className = 'fa-solid fa-sun text-amber-400';
  } else {
    if (icon1) icon1.className = 'fa-solid fa-moon text-slate-600';
    if (text1) text1.textContent = 'Dark Mode';
    if (icon2) icon2.className = 'fa-solid fa-moon text-slate-600';
  }
}

// ========================================================
// EMBEDDED COMPLETE DATASET (All 61 Students from students.xlsx)
// ========================================================
let STUDENTS_DB = [
  {"reg": "510423243001", "name": "Abdul Rahuman . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "48/1,  Ramalinganar main road, Tiruvannamalai, 606601", "email": "abdulrahuman.ar2417@gmail.com", "mobile": "6381941350", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243002", "name": "Abinaya . G", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "2/24, Pallathur(Vill), Dharimapuri, 635303", "email": "abiguna846@gmail.com", "mobile": "8838906981", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243003", "name": "Abinaya . V", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "196, Kendiyan street, Tiruvannamalai, 606753", "email": "abivenkat2611@gmail.com", "mobile": "9789082286", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243004", "name": "Agalya . E", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Mettu street, Tiruvannamalai, 606803", "email": "agalyae28@gmail.com", "mobile": "9787127118", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243005", "name": "Ajay  . K", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "26, Sornapuri, Kallakurichi, 606213", "email": "k.ajay200612@gmail.com", "mobile": "9361719572", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243006", "name": "Ajay . K", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Pillaiyar kovil street, Tiruvannamalai, 606753", "email": "ajaykumar19379@gmail.com", "mobile": "6385750058", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243007", "name": "Akash . R", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Kamarajar nagar, Tiruvannamalai, 606907", "email": "akashmicky137@gmail.com", "mobile": "9342410313", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243008", "name": "Ananya . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Bazaar street, Tiruvannamalai, 606755", "email": "ananyasivakumar07@gmail.com", "mobile": "7871675716", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243009", "name": "Aravindh . D", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Mottaiyan street, Tiruvannamalai, 606708", "email": "aravindh05072005@gmail.com", "mobile": "9025983796", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243010", "name": "Archana . R", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "528, Perumal kovil street, Tiruvannamalai, 606806", "email": "archanaramesh342@gmail.com", "mobile": "8122396113", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243011", "name": "Ashok . V", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "3/293, Mettu street, Cuddalore, 606110", "email": "ashokkumarv1974@gmail.com", "mobile": "9025708945", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243012", "name": "Balaji . J", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "NO 119/A  baskar street, Tiruvannamalai, 606601", "email": "balajibalaji97902@gmail.com", "mobile": "7092923793", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243013", "name": "Balamurugan . V", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "332, Pillaiyar Kovil St, Tiruvannamalai, 606752", "email": "bala08052006@gmail.com", "mobile": "9361730075", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243014", "name": "Bharathiraja . J", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "26, Ramadoss st, Tiruvannamalai, 606601", "email": "bharathiraja2006j@gmail.com", "mobile": "9944645228", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243015", "name": "Bhuvaneshwari . A", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "810/3, Madhakoil street, Tiruvannamalai, 606708", "email": "arumbhuvaneshwari@gmail.com", "mobile": "9080782756", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243016", "name": "Deena . R", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Mariyamman kovil st, Tiruvannamalai, 606707", "email": "rdeena0502@gmail.com", "mobile": "9629167383", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243017", "name": "Deepan . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Perumal kovil street, Tiruvannamalai, 606708", "email": "deepandeepans680@gmail.com", "mobile": "9597284617", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243018", "name": "Dhanasri . E", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "40,  Mariyamman koil street, Tiruvannamalai, 606808", "email": "dhanasriedu@gmail.com", "mobile": "8072120042", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243019", "name": "Dhanushkodi . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "33/A, Muthu Mariamman Koil St, Chengalpattu, 603102", "email": "dhanushkodis75@gmail.com", "mobile": "8122394017", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243020", "name": "Gokul . V", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "15, 3rd street, Periyar nagar, Tiruvannamalai, 606601", "email": "gokul24102005@gmail.com", "mobile": "9025700756", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243021", "name": "Hariharan . V", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "620, School street, Tiruvannamalai, 606806", "email": "vhariharan283@gmail.com", "mobile": "8903503254", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243022", "name": "Jaiganesh . C", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "37/B, Ponniamman kovil street, Tiruvannamalai, 606601", "email": "jaiganeshjaiganesh756@gmail.com", "mobile": "9025983804", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243023", "name": "Janani . M", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "697, Main road, Tiruvannamalai, 606808", "email": "jananimuthu0509@gmail.com", "mobile": "9047915998", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243024", "name": "Jeeva . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "90,  Mariyamman Kovil Street, Tiruvannamalai, 606708", "email": "jeeva2006124@gmail.com", "mobile": "7094038165", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243025", "name": "Keerthika . P", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "57, Anna Nagar, Tiruvannamalai, 606804", "email": "keerthika0607@gmail.com", "mobile": "6374989647", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243026", "name": "Krishna Kumar .S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "NO.3 Neelambari Street, Vallar Nagar, Villupuram, 605602", "email": "krishnakumar.sk1205@gmail.com", "mobile": "8667683935", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243027", "name": "Madhusudhanan . P", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "567, Murugan kovil street, Tiruvannamalai, 606708", "email": "madhusudhanan0143@gmail.com", "mobile": "8122421376", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243028", "name": "Magesh . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "100/1,  School street, Tiruvannamalai, 606701", "email": "mageshskmageshsk9629@gmail.com", "mobile": "9629166825", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243029", "name": "Mani . G", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "156, Anna nagar, Tiruvannamalai, 606752", "email": "manikandan050306@gmail.com", "mobile": "7810874026", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243030", "name": "Manigandan . M", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Kamarajar nagar, Tiruvannamalai, 606907", "email": "manimurugan992@gmail.com", "mobile": "9360814674", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243031", "name": "Manikandan . M", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Mariyamman kovil street, Tiruvannamalai, 606708", "email": "manimani638062@gmail.com", "mobile": "6380628741", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243032", "name": "Mohamed Irfan . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "No.145, Main road, Mathalangulam, Tiruvannamalai, 606601", "email": "irfan040406@gmail.com", "mobile": "8124960309", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243033", "name": "Mohamed Shajahan . N", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "33, Ramadoss Street, Tiruvannamalai, 606601", "email": "shajahanshajahan607@gmail.com", "mobile": "9994645229", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243034", "name": "Monisha . P", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "53, Road street, Tiruvannamalai, 606803", "email": "monishap8438@gmail.com", "mobile": "9342410314", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243035", "name": "Mugunthan . M", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "89, Eswaran kovil street, Tiruvannamalai, 606708", "email": "mugunthanm89@gmail.com", "mobile": "7871675717", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243036", "name": "Naveen . A", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Mariyamman kovil st, Tiruvannamalai, 606707", "email": "naveena90@gmail.com", "mobile": "9025983797", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243037", "name": "Naveen . R", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "45, North street, Tiruvannamalai, 606601", "email": "naveenr12@gmail.com", "mobile": "8122396114", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243038", "name": "Naveenkumar . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "22, School road, Tiruvannamalai, 606806", "email": "naveenkumars07@gmail.com", "mobile": "9025708946", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243039", "name": "Nithya . M", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "33, Main road, Tiruvannamalai, 606752", "email": "nithyam2006@gmail.com", "mobile": "7092923794", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243040", "name": "Pavithra . K", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Pillaiyar kovil street, Tiruvannamalai, 606753", "email": "pavithrak26@gmail.com", "mobile": "9361730076", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243041", "name": "Pooja . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "NO 12, Gandhi street, Tiruvannamalai, 606601", "email": "poojasivakumar05@gmail.com", "mobile": "9944645230", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243042", "name": "Prasanth . R", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "40/1, Bazaar street, Tiruvannamalai, 606755", "email": "prasanthr02@gmail.com", "mobile": "9080782757", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243043", "name": "Praveen . A", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Mottaiyan street, Tiruvannamalai, 606708", "email": "praveena2006@gmail.com", "mobile": "9629167384", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243044", "name": "Praveenkumar . K", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "52, School street, Tiruvannamalai, 606806", "email": "praveenkumark23@gmail.com", "mobile": "9597284618", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243045", "name": "Premkumar . M", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Mettu street, Cuddalore, 606110", "email": "premkumarm08@gmail.com", "mobile": "8072120043", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243046", "name": "Priyadharshini . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Baskar street, Tiruvannamalai, 606601", "email": "priyadharshinis09@gmail.com", "mobile": "8122394018", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243047", "name": "Rahul . G", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Pillaiyar Kovil St, Tiruvannamalai, 606752", "email": "rahulg2006@gmail.com", "mobile": "9025700757", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243048", "name": "Rajarajan . T", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Ramadoss st, Tiruvannamalai, 606601", "email": "rajarajant01@gmail.com", "mobile": "8903503255", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243049", "name": "Rithika . V", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Madhakoil street, Tiruvannamalai, 606708", "email": "rithikav2006@gmail.com", "mobile": "9025983805", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243050", "name": "Sandhiya . M", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Mariyamman kovil st, Tiruvannamalai, 606707", "email": "sandhiyam04@gmail.com", "mobile": "9047915999", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243051", "name": "Sanjay . K", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Perumal kovil street, Tiruvannamalai, 606708", "email": "sanjayk2006@gmail.com", "mobile": "7094038166", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243052", "name": "Saravanan . P", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Mariyamman koil street, Tiruvannamalai, 606808", "email": "saravananp11@gmail.com", "mobile": "6374989648", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243053", "name": "Sathish . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Muthu Mariamman Koil St, Chengalpattu, 603102", "email": "sathishs2006@gmail.com", "mobile": "8122421377", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243054", "name": "Shalini . A", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Periyar nagar, Tiruvannamalai, 606601", "email": "shalinia03@gmail.com", "mobile": "9629166826", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243055", "name": "Sneha . R", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "School street, Tiruvannamalai, 606806", "email": "snehar2006@gmail.com", "mobile": "7810874027", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243056", "name": "Surya . M", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Ponniamman kovil street, Tiruvannamalai, 606601", "email": "suryam2006@gmail.com", "mobile": "9360814675", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243057", "name": "Swetha . D", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Main road, Tiruvannamalai, 606808", "email": "swethad05@gmail.com", "mobile": "6380628742", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243058", "name": "Tamilarasan . K", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Mariyamman Kovil Street, Tiruvannamalai, 606708", "email": "tamilarasank2006@gmail.com", "mobile": "8124960310", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243059", "name": "Tharun . S", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Anna Nagar, Tiruvannamalai, 606804", "email": "tharuns2006@gmail.com", "mobile": "9994645231", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243060", "name": "Yuvaraj . G", "batch": "2023 - 2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "Murugan kovil street, Tiruvannamalai, 606708", "email": "yuvarajg2006@gmail.com", "mobile": "9342410315", "cgpa": "8.72 / 10.0"},
  {"reg": "510423243301", "name": "Arun .R", "batch": "2023-2027", "dept": "B.Tech AI&DS", "sem": "Semester 5", "att": "91.8%", "pin": "1234", "address": "252/3, Lakshmi Nagar, Nallavanpalayam, Tiruvannamalai, 606603", "email": "arunarundx1@gmail.com", "mobile": "6385707118", "cgpa": "8.72 / 10.0"}
];

let OD_APPLICATIONS = [];
let LEAVE_APPLICATIONS = [];
let STAFF_UPLOADS = [];
let HOD_NOTIFICATIONS = [
  {
    id: "NOTIF-2026-101",
    title: "Department of AI&DS Official Notice",
    body: "All department students are instructed to regularly inspect portal schedules and OD submissions.",
    priority: "Important",
    audience: "All AI&DS Students",
    date: "28-09-2026",
    time: "10:30 AM",
    sender: "Prof. S. Noorul Hassan (HOD AI&DS)",
    isRead: false
  }
];

let dedicatedRole = "student";
let loggedInUser = null;
let webcamStream = null;

function openDedicatedLogin(role) {
  dedicatedRole = role;
  toggleAuthMode('creds');

  const portalTitle = document.getElementById('loginPortalTitle');
  const portalDesc = document.getElementById('loginPortalDesc');
  const portalIcon = document.getElementById('loginPortalIcon');
  const lblId = document.getElementById('lblLoginId');
  const idInput = document.getElementById('loginId');
  const passInput = document.getElementById('loginPass');
  const hint = document.getElementById('loginHelperHint');
  const subHeader = document.getElementById('portalSubHeader');
  const btnSubmit = document.getElementById('btnSubmitLogin');

  idInput.value = "";
  passInput.value = "";

  if (role === 'student') {
    portalTitle.textContent = "Student ERP Sign In";
    portalDesc.textContent = "Student Workspace • Department of AI&DS";
    portalIcon.className = "w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 flex items-center justify-center mx-auto mb-2.5 text-xl shadow-xs";
    portalIcon.innerHTML = `<i class="fa-solid fa-user-graduate"></i>`;
    lblId.textContent = "Registration / Roll Number";
    hint.textContent = "Enter your Register Number (Default PIN: 1234)";
    subHeader.textContent = "Student Terminal • Code: 1504";
    btnSubmit.innerHTML = `<span>Sign In to Student Terminal</span><i class="fa-solid fa-arrow-right text-[11px] ml-1"></i>`;
  } else if (role === 'staff') {
    portalTitle.textContent = "Faculty & Counsellor Desk";
    portalDesc.textContent = "Tier-1 Verification Workspace • Dept of AI&DS";
    portalIcon.className = "w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 flex items-center justify-center mx-auto mb-2.5 text-xl shadow-xs";
    portalIcon.innerHTML = `<i class="fa-solid fa-chalkboard-user"></i>`;
    lblId.textContent = "Faculty Employee ID";
    idInput.value = "STAFF-AI-104";
    passInput.value = "1234";
    hint.textContent = "Faculty ID: STAFF-AI-104 (PIN: 1234)";
    subHeader.textContent = "Faculty Portal • Code: 1504";
    btnSubmit.innerHTML = `<span>Sign In to Counsellor Desk</span><i class="fa-solid fa-arrow-right text-[11px] ml-1"></i>`;
  } else if (role === 'hod') {
    portalTitle.textContent = "HOD Executive Portal";
    portalDesc.textContent = "Tier-2 Final Sanction Desk • Office of HOD";
    portalIcon.className = "w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 flex items-center justify-center mx-auto mb-2.5 text-xl shadow-xs";
    portalIcon.innerHTML = `<i class="fa-solid fa-building-columns"></i>`;
    lblId.textContent = "HOD Executive ID";
    idInput.value = "HOD-AIDS-01";
    passInput.value = "1234";
    hint.textContent = "Executive ID: HOD-AIDS-01 (PIN: 1234)";
    subHeader.textContent = "Executive Desk • Code: 1504";
    btnSubmit.innerHTML = `<span>Sign In to HOD Office</span><i class="fa-solid fa-arrow-right text-[11px] ml-1"></i>`;
  }

  showPage('login');
}

function togglePassEye() {
  const p = document.getElementById('loginPass');
  const icon = document.getElementById('passEyeIcon');
  if (p.type === 'password') {
    p.type = 'text';
    icon.className = 'fa-regular fa-eye-slash text-slate-600';
  } else {
    p.type = 'password';
    icon.className = 'fa-regular fa-eye text-slate-400';
  }
}

function toggleAuthMode(mode) {
  const credsBtn = document.getElementById('authModeCreds');
  const faceBtn = document.getElementById('authModeFace');
  const credsForm = document.getElementById('credsForm');
  const faceSec = document.getElementById('faceIdSection');

  if (mode === 'faceid') {
    faceBtn.style.backgroundColor = "var(--primary-subtle)";
    faceBtn.style.color = "var(--primary-text)";
    faceBtn.className = "px-2.5 sm:px-3 py-1 rounded-md font-semibold";
    credsBtn.style.backgroundColor = "transparent";
    credsBtn.style.color = "var(--text-muted)";
    credsBtn.className = "px-2.5 sm:px-3 py-1 rounded-md hover:text-inherit";
    credsForm.classList.add('hidden');
    faceSec.classList.remove('hidden');
    faceSec.classList.add('flex');
    initWebcam();
  } else {
    credsBtn.style.backgroundColor = "var(--primary-subtle)";
    credsBtn.style.color = "var(--primary-text)";
    credsBtn.className = "px-2.5 sm:px-3 py-1 rounded-md font-semibold";
    faceBtn.style.backgroundColor = "transparent";
    faceBtn.style.color = "var(--text-muted)";
    faceBtn.className = "px-2.5 sm:px-3 py-1 rounded-md hover:text-inherit";
    faceSec.classList.add('hidden');
    faceSec.classList.remove('flex');
    credsForm.classList.remove('hidden');
    stopWebcam();
  }
}

async function initWebcam() {
  const video = document.getElementById('webcamFeed');
  const placeholder = document.getElementById('cameraPlaceholder');
  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      webcamStream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } });
      video.srcObject = webcamStream;
      video.classList.remove('hidden');
      placeholder.classList.add('hidden');
    }
  } catch (err) {
    placeholder.innerHTML = `<i class="fa-solid fa-camera text-3xl text-slate-400"></i><span class="text-xs text-slate-400 mt-2">Camera simulation active</span>`;
  }
}

function stopWebcam() {
  if (webcamStream) {
    webcamStream.getTracks().forEach(track => track.stop());
    webcamStream = null;
  }
}

function startFaceScan() {
  const statusText = document.getElementById('biometricStatusText');
  const prog = document.getElementById('biometricProgress');
  const btn = document.getElementById('btnTriggerScan');
  btn.disabled = true;

  statusText.innerHTML = `<span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span><span>Analyzing facial structure...</span>`;
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += 25;
    prog.style.width = `${progress}%`;

    if (progress === 50) {
      statusText.innerHTML = `<span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span><span>Verifying identity...</span>`;
    }

    if (progress >= 100) {
      clearInterval(interval);
      statusText.innerHTML = `<span class="text-emerald-600 font-semibold"><i class="fa-solid fa-check mr-1"></i>Verified</span>`;
      
      setTimeout(() => {
        stopWebcam();
        btn.disabled = false;
        prog.style.width = '0%';

        if (dedicatedRole === 'student') {
          const student = STUDENTS_DB.find(s => s.reg === "510423243026") || STUDENTS_DB[0];
          loggedInUser = student;
          setupStudentDashboard(student);
          showPage('erp');
        } else if (dedicatedRole === 'staff') {
          loggedInUser = { name: "Mrs. V. Anitha", role: "Counsellor / AP AIDS", staffId: "STAFF-AI-104" };
          renderStaffPortals();
          showPage('staff');
        } else if (dedicatedRole === 'hod') {
          loggedInUser = { name: "Prof. S. Noorul Hassan", role: "HOD AI&DS" };
          renderHodPortals();
          showPage('hod');
        }
      }, 500);
    }
  }, 250);
}

// Student Login matching against your 61 student records
function handleLogin() {
  const enteredId = document.getElementById('loginId').value.trim();
  const enteredPin = document.getElementById('loginPass').value.trim();

  if (dedicatedRole === 'student') {
    // Match Register Number (case-insensitive) & PIN
    const student = STUDENTS_DB.find(st => st.reg.toLowerCase() === enteredId.toLowerCase() && (st.pin === enteredPin || enteredPin === "1234"));

    if (student) {
      loggedInUser = student;
      setupStudentDashboard(student);
      showPage('erp');
    } else {
      alert(`Invalid Register Number or PIN.\nNo student with Registration Number "${enteredId}" was found in database.`);
    }
  } 
  else if (dedicatedRole === 'staff') {
    if (enteredId === "STAFF-AI-104" && enteredPin === "1234") {
      loggedInUser = { name: "Mrs. V. Anitha", role: "Counsellor / AP AIDS", staffId: "STAFF-AI-104" };
      document.getElementById('staffNameHeader').textContent = `${loggedInUser.name} (${loggedInUser.role})`;
      renderStaffPortals();
      showPage('staff');
    } else {
      alert("Invalid Staff Credentials.");
    }
  } 
  else if (dedicatedRole === 'hod') {
    if (enteredId === "HOD-AIDS-01" && enteredPin === "1234") {
      loggedInUser = { name: "Prof. S. Noorul Hassan", role: "HOD AI&DS" };
      renderHodPortals();
      showPage('hod');
    } else {
      alert("Invalid HOD Credentials.");
    }
  }
}

function showPage(pageId) {
  const allPages = ['home', 'login', 'erp', 'staff', 'hod'];
  allPages.forEach(p => {
    const el = document.getElementById(`page-${p}`);
    if (el) {
      el.style.setProperty('display', 'none', 'important');
    }
  });

  const target = document.getElementById(`page-${pageId}`);
  if (target) {
    target.style.setProperty('display', 'flex', 'important');
  }
  window.scrollTo(0, 0);
}

function logout() {
  loggedInUser = null;
  stopWebcam();
  toggleAuthMode('creds');
  document.getElementById('loginId').value = "";
  document.getElementById('loginPass').value = "";
  showPage('home');
}

// Binds ONLY the active student's exact personal data
function setupStudentDashboard(st) {
  if (!st) return;

  const welcome = document.getElementById('dashWelcome');
  const initials = document.getElementById('avatarInitials');
  const cardRoll = document.getElementById('cardRollNo');
  const metricRoll = document.getElementById('metricRoll');
  const cardDept = document.getElementById('cardDept');
  const cardAtt = document.getElementById('cardAtt');
  const dashCgpa = document.getElementById('dashCgpa');

  if (welcome) welcome.textContent = st.name.toUpperCase();
  if (initials) {
    const names = st.name.replace(/[^a-zA-Z ]/g, "").split(' ').filter(n => n.length > 0);
    initials.textContent = names.length > 1 ? (names[0][0] + names[1][0]).toUpperCase() : st.name.substring(0, 2).toUpperCase();
  }
  if (cardRoll) cardRoll.textContent = st.reg;
  if (metricRoll) metricRoll.textContent = st.reg;
  if (cardDept) cardDept.textContent = st.dept;
  if (cardAtt) cardAtt.textContent = st.att;
  if (dashCgpa) dashCgpa.textContent = st.cgpa;

  // Prefill student's official address from Excel in Leave form
  const leaveName = document.getElementById('leaveStudentName');
  const leaveReg = document.getElementById('leaveRegNo');
  const leaveAddr = document.getElementById('leaveAddress');

  if (leaveName) leaveName.value = st.name;
  if (leaveReg) leaveReg.value = st.reg;
  if (leaveAddr) leaveAddr.value = st.address;

  renderStudentLeaves(st.reg);
  renderStudentOdLedger(st.reg);
  renderStudentNotifications();
}

function switchTab(tabId) {
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-tab-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelectorAll('.erp-subview').forEach(v => v.classList.add('hidden'));
  const target = document.getElementById(`erp-tab-${tabId}`);
  if (target) target.classList.remove('hidden');

  const sidebar = document.getElementById('mainSidebar');
  const backdrop = document.getElementById('mobileBackdrop');
  if (window.innerWidth < 768 && sidebar && !sidebar.classList.contains('-translate-x-full')) {
    sidebar.classList.add('-translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
  }
  window.scrollTo(0, 0);
}

function handleLeaveSubmit() {
  if (!loggedInUser) return;

  const from = document.getElementById('leaveFrom').value;
  const to = document.getElementById('leaveTo').value;
  const reason = document.getElementById('leaveReason').value.trim();
  const address = document.getElementById('leaveAddress').value.trim();

  if (!from || !to || !reason) {
    alert("Please fill in leave duration and reason.");
    return;
  }

  const newApp = {
    id: `LV-2026-${String(LEAVE_APPLICATIONS.length + 1).padStart(3, '0')}`,
    reg: loggedInUser.reg,
    name: loggedInUser.name,
    from: from,
    to: to,
    reason: reason,
    address: address || loggedInUser.address,
    counsellorStatus: "Pending",
    counsellorSign: null,
    counsellorDate: null,
    hodStatus: "Awaiting Counsellor",
    hodSign: null,
    hodDate: null,
    finalStatus: "Pending Counsellor"
  };

  LEAVE_APPLICATIONS.unshift(newApp);
  alert(`Leave Application #${newApp.id} submitted for ${loggedInUser.name}!`);
  document.getElementById('leaveReason').value = "";
  renderStudentLeaves(loggedInUser.reg);
}

function handleOdSubmit() {
  if (!loggedInUser) return;

  const title = document.getElementById('odTitle').value.trim();
  const category = document.getElementById('odCategory').value;
  const venue = document.getElementById('odVenue').value.trim();
  const from = document.getElementById('odFrom').value;
  const to = document.getElementById('odTo').value;

  if (!title || !venue || !from || !to) {
    alert("Please enter title, venue, and dates for On-Duty.");
    return;
  }

  const newOD = {
    token: `OD-AEC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    reg: loggedInUser.reg,
    name: loggedInUser.name,
    title: title,
    category: category,
    venue: venue,
    from: from,
    to: to,
    counsellorStatus: "Pending",
    counsellorSign: null,
    counsellorDate: null,
    hodStatus: "Awaiting Counsellor",
    hodSign: null,
    hodDate: null,
    finalStatus: "Pending Counsellor"
  };

  OD_APPLICATIONS.unshift(newOD);
  alert(`OD Application #${newOD.token} dispatched for ${loggedInUser.name}!`);
  document.getElementById('odTitle').value = "";
  document.getElementById('odVenue').value = "";
  renderStudentOdLedger(loggedInUser.reg);
}

function renderStaffPortals() {
  renderStaffLeaveList();
  renderStaffOdList();
  renderUploadedFiles();
}

function renderStaffLeaveList() {
  const container = document.getElementById('staffLeavePendingList');
  if (!container) return;
  const pending = LEAVE_APPLICATIONS.filter(l => l.counsellorStatus === 'Pending');

  if (pending.length === 0) {
    container.innerHTML = `<div class="text-slate-500 py-6 text-center font-mono text-xs">No pending student leaves awaiting counsellor endorsement.</div>`;
    return;
  }

  container.innerHTML = pending.map(l => `
    <div class="p-3.5 theme-card-subtle rounded-lg space-y-2 border">
      <div class="flex justify-between items-start">
        <div>
          <span class="font-bold text-inherit text-sm">${l.name}</span>
          <span class="text-slate-500 text-xs block font-mono">Reg: ${l.reg} • Ref: ${l.id}</span>
        </div>
        <span class="text-amber-800 text-[10px] bg-amber-100 px-2 py-0.5 rounded font-mono font-bold">Tier-1 Review</span>
      </div>
      <div class="text-slate-500 text-xs font-mono">
        <p><strong>Duration:</strong> ${l.from} to ${l.to}</p>
        <p><strong>Reason:</strong> ${l.reason}</p>
      </div>
      <div class="flex gap-2 pt-2 border-t" style="border-color: var(--border-main);">
        <button onclick="counsellorLeaveAction('${l.id}', true)" class="flex-1 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1 cursor-pointer">
          <i class="fa-solid fa-check text-[10px]"></i> Approve & Send to HOD
        </button>
        <button onclick="counsellorLeaveAction('${l.id}', false)" class="px-3 py-1.5 theme-card text-rose-600 hover:bg-rose-50 font-semibold rounded-lg text-xs cursor-pointer">
          Reject
        </button>
      </div>
    </div>
  `).join('');
}

function counsellorLeaveAction(id, approved) {
  const app = LEAVE_APPLICATIONS.find(l => l.id === id);
  if (!app) return;

  if (approved) {
    app.counsellorStatus = "Approved";
    app.counsellorSign = "Mrs. V. Anitha (AP/AIDS)";
    app.counsellorDate = "28-09-2026";
    app.hodStatus = "Pending";
    app.finalStatus = "Approved by Counsellor, Pending HOD";
    pushLiveNotification(`Leave Application #${app.id}`, `Counsellor approved and forwarded your application to HOD.`);
  } else {
    app.counsellorStatus = "Rejected";
    app.counsellorSign = "Mrs. V. Anitha [Rejected]";
    app.counsellorDate = "28-09-2026";
    app.hodStatus = "Cancelled";
    app.finalStatus = "Rejected by Counsellor";
    pushLiveNotification(`Leave Application #${app.id}`, `Your leave application was declined by Counsellor.`);
  }
  renderStaffLeaveList();
}

function renderStaffOdList() {
  const container = document.getElementById('staffOdPendingList');
  if (!container) return;
  const pending = OD_APPLICATIONS.filter(o => o.counsellorStatus === 'Pending');

  if (pending.length === 0) {
    container.innerHTML = `<div class="text-slate-500 py-6 text-center font-mono text-xs">No pending student ODs awaiting counsellor endorsement.</div>`;
    return;
  }

  container.innerHTML = pending.map(o => `
    <div class="p-3.5 theme-card-subtle rounded-lg space-y-2 border">
      <div class="flex justify-between items-start">
        <div>
          <span class="font-bold text-inherit text-sm">${o.name}</span>
          <span class="text-slate-500 text-xs block font-mono">Token: ${o.token} • ${o.category}</span>
        </div>
        <span class="text-indigo-800 text-[10px] bg-indigo-100 px-2 py-0.5 rounded font-mono font-bold">Tier-1 Review</span>
      </div>
      <div class="text-slate-500 text-xs font-mono">
        <p><strong>Title:</strong> ${o.title}</p>
        <p><strong>Venue:</strong> ${o.venue} (${o.from} to ${o.to})</p>
      </div>
      <div class="flex gap-2 pt-2 border-t" style="border-color: var(--border-main);">
        <button onclick="counsellorOdAction('${o.token}', true)" class="flex-1 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1 cursor-pointer">
          <i class="fa-solid fa-check text-[10px]"></i> Approve & Send to HOD
        </button>
        <button onclick="counsellorOdAction('${o.token}', false)" class="px-3 py-1.5 theme-card text-rose-600 hover:bg-rose-50 font-semibold rounded-lg text-xs cursor-pointer">
          Reject
        </button>
      </div>
    </div>
  `).join('');
}

function counsellorOdAction(token, approved) {
  const app = OD_APPLICATIONS.find(o => o.token === token);
  if (!app) return;

  if (approved) {
    app.counsellorStatus = "Approved";
    app.counsellorSign = "Mrs. V. Anitha (AP/AIDS)";
    app.counsellorDate = "28-09-2026";
    app.hodStatus = "Pending";
    app.finalStatus = "Approved by Counsellor, Pending HOD";
    pushLiveNotification(`OD Application #${app.token}`, `Counsellor approved and forwarded your OD to HOD.`);
  } else {
    app.counsellorStatus = "Rejected";
    app.counsellorSign = "Mrs. V. Anitha [Rejected]";
    app.counsellorDate = "28-09-2026";
    app.hodStatus = "Cancelled";
    app.finalStatus = "Rejected by Counsellor";
    pushLiveNotification(`OD Application #${app.token}`, `Your OD request was declined by Counsellor.`);
  }
  renderStaffOdList();
}

function previewSelectedFile(e) {
  const file = e.target.files[0];
  const prompt = document.getElementById('dropZonePrompt');
  if (file && prompt) {
    prompt.innerHTML = `<span class="text-emerald-600 font-semibold"><i class="fa-solid fa-file-check mr-1"></i>Selected: ${file.name}</span>`;
  }
}

function handleStaffFileUpload() {
  const fileInput = document.getElementById('staffFileInput');
  const file = fileInput.files[0];
  const title = document.getElementById('uploadTitle').value.trim() || "Course Document";
  const subject = document.getElementById('uploadSubject').value;
  const category = document.getElementById('uploadCategory').value;

  const newDoc = {
    id: `DOC-AEC-${Math.floor(100 + Math.random() * 900)}`,
    title: title,
    subject: subject,
    category: category,
    fileName: file ? file.name : "Document.pdf",
    size: file ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` : "1.5 MB",
    uploadedBy: loggedInUser ? `${loggedInUser.name}` : "Mrs. V. Anitha",
    date: "28-09-2026"
  };

  STAFF_UPLOADS.unshift(newDoc);
  alert(`File "${newDoc.fileName}" published under ${newDoc.subject}.`);

  document.getElementById('uploadTitle').value = "";
  fileInput.value = "";
  document.getElementById('dropZonePrompt').textContent = "Click to browse or drag file here";
  renderUploadedFiles();
}

function deleteUploadedDoc(id) {
  if (confirm(`Remove document record #${id}?`)) {
    STAFF_UPLOADS = STAFF_UPLOADS.filter(d => d.id !== id);
    renderUploadedFiles();
  }
}

function renderUploadedFiles() {
  const container = document.getElementById('uploadedFilesList');
  const badge = document.getElementById('uploadCountBadge');
  if (!container) return;

  if (badge) badge.textContent = `${STAFF_UPLOADS.length} Document${STAFF_UPLOADS.length === 1 ? '' : 's'}`;

  if (STAFF_UPLOADS.length === 0) {
    container.innerHTML = `<div class="text-center py-6 text-slate-400 font-mono text-xs">No files published yet.</div>`;
    return;
  }

  container.innerHTML = STAFF_UPLOADS.map(doc => `
    <div class="p-3 theme-card-subtle rounded-lg flex items-center justify-between gap-3 border">
      <div class="flex items-center space-x-3 overflow-hidden">
        <div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
          <i class="fa-solid fa-file-lines text-sm"></i>
        </div>
        <div class="truncate">
          <div class="flex items-center space-x-2">
            <span class="font-bold text-inherit truncate">${doc.title}</span>
            <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">${doc.subject}</span>
          </div>
          <p class="text-[11px] text-slate-500 font-mono truncate">
            ${doc.fileName} • ${doc.size} • ${doc.category}
          </p>
        </div>
      </div>
      <div class="flex items-center space-x-1.5 shrink-0">
        <button onclick="deleteUploadedDoc('${doc.id}')" class="p-1.5 sm:px-2.5 sm:py-1 theme-card rounded text-xs text-rose-600 hover:text-rose-700 cursor-pointer">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function renderHodPortals() {
  renderHodLeaveList();
  renderHodOdList();
  renderHodBroadcastHistory();
}

function renderHodLeaveList() {
  const container = document.getElementById('hodLeavePendingList');
  if (!container) return;
  const pending = LEAVE_APPLICATIONS.filter(l => l.counsellorStatus === 'Approved' && l.hodStatus === 'Pending');

  if (pending.length === 0) {
    container.innerHTML = `<div class="text-slate-500 py-6 text-center font-mono text-xs">No Counsellor-approved leave applications awaiting HOD sanction.</div>`;
    return;
  }

  container.innerHTML = pending.map(l => `
    <div class="p-3.5 theme-card-subtle rounded-lg space-y-2 border">
      <div class="flex justify-between items-start">
        <div>
          <span class="font-bold text-inherit text-sm">${l.name}</span>
          <span class="text-slate-500 text-xs block font-mono">Reg: ${l.reg} • Ref: ${l.id}</span>
        </div>
        <span class="text-emerald-800 text-[10px] bg-emerald-100 px-2 py-0.5 rounded font-mono font-bold">Counsellor Endorsed</span>
      </div>
      <div class="text-slate-500 text-xs font-mono">
        <p><strong>Period:</strong> ${l.from} to ${l.to}</p>
        <p><strong>Reason:</strong> ${l.reason}</p>
        <p class="text-emerald-600 font-semibold mt-1"><i class="fa-solid fa-signature mr-1"></i>${l.counsellorSign}</p>
      </div>
      <div class="flex gap-2 pt-2 border-t" style="border-color: var(--border-main);">
        <button onclick="hodLeaveAction('${l.id}', true)" class="flex-1 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1 cursor-pointer">
          <i class="fa-solid fa-stamp text-[10px]"></i> Sanction & Approve
        </button>
        <button onclick="hodLeaveAction('${l.id}', false)" class="px-3 py-1.5 theme-card text-rose-600 hover:bg-rose-50 font-semibold rounded-lg text-xs cursor-pointer">
          Reject
        </button>
      </div>
    </div>
  `).join('');
}

function hodLeaveAction(id, approved) {
  const app = LEAVE_APPLICATIONS.find(l => l.id === id);
  if (!app) return;

  if (approved) {
    app.hodStatus = "Approved";
    app.hodSign = "Prof. S. Noorul Hassan (HOD AI&DS)";
    app.hodDate = "28-09-2026";
    app.finalStatus = "Approved";
    pushLiveNotification(`Leave Sanctioned #${app.id}`, `HOD Prof. S. Noorul Hassan granted Final Approval.`);
  } else {
    app.hodStatus = "Rejected";
    app.hodSign = "Prof. S. Noorul Hassan [Rejected]";
    app.hodDate = "28-09-2026";
    app.finalStatus = "Rejected by HOD";
    pushLiveNotification(`Leave Notice #${app.id}`, `HOD Prof. S. Noorul Hassan declined your leave request.`);
  }
  renderHodLeaveList();
}

function renderHodOdList() {
  const container = document.getElementById('hodOdPendingList');
  if (!container) return;
  const pending = OD_APPLICATIONS.filter(o => o.counsellorStatus === 'Approved' && o.hodStatus === 'Pending');

  if (pending.length === 0) {
    container.innerHTML = `<div class="text-slate-500 py-6 text-center font-mono text-xs">No Counsellor-approved OD applications awaiting HOD sanction.</div>`;
    return;
  }

  container.innerHTML = pending.map(o => `
    <div class="p-3.5 theme-card-subtle rounded-lg space-y-2 border">
      <div class="flex justify-between items-start">
        <div>
          <span class="font-bold text-inherit text-sm">${o.name}</span>
          <span class="text-slate-500 text-xs block font-mono">Token: ${o.token} • ${o.category}</span>
        </div>
        <span class="text-emerald-800 text-[10px] bg-emerald-100 px-2 py-0.5 rounded font-mono font-bold">Counsellor Endorsed</span>
      </div>
      <div class="text-slate-500 text-xs font-mono">
        <p><strong>Title:</strong> ${o.title}</p>
        <p><strong>Venue:</strong> ${o.venue} (${o.from} to ${o.to})</p>
        <p class="text-emerald-600 font-semibold mt-1"><i class="fa-solid fa-signature mr-1"></i>${o.counsellorSign}</p>
      </div>
      <div class="flex gap-2 pt-2 border-t" style="border-color: var(--border-main);">
        <button onclick="hodOdAction('${o.token}', true)" class="flex-1 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1 cursor-pointer">
          <i class="fa-solid fa-stamp text-[10px]"></i> Sanction & Approve
        </button>
        <button onclick="hodOdAction('${o.token}', false)" class="px-3 py-1.5 theme-card text-rose-600 hover:bg-rose-50 font-semibold rounded-lg text-xs cursor-pointer">
          Reject
        </button>
      </div>
    </div>
  `).join('');
}

function hodOdAction(token, approved) {
  const app = OD_APPLICATIONS.find(o => o.token === token);
  if (!app) return;

  if (approved) {
    app.hodStatus = "Approved";
    app.hodSign = "Prof. S. Noorul Hassan (HOD AI&DS)";
    app.hodDate = "28-09-2026";
    app.finalStatus = "Approved";
    pushLiveNotification(`OD Sanctioned #${app.token}`, `HOD Prof. S. Noorul Hassan authorized your On-Duty request.`);
  } else {
    app.hodStatus = "Rejected";
    app.hodSign = "Prof. S. Noorul Hassan [Rejected]";
    app.hodDate = "28-09-2026";
    app.finalStatus = "Rejected by HOD";
    pushLiveNotification(`OD Notice #${app.token}`, `HOD Prof. S. Noorul Hassan declined your On-Duty request.`);
  }
  renderHodOdList();
}

function handleHodBroadcast() {
  const priority = document.getElementById('msgPriority').value;
  const audience = document.getElementById('msgAudience').value;
  const title = document.getElementById('msgTitle').value.trim() || "Department Notice";
  const body = document.getElementById('msgBody').value.trim() || "Please refer to departmental circular board.";

  const newNotif = {
    id: `NOTIF-2026-${Math.floor(100 + Math.random() * 900)}`,
    title: title,
    body: body,
    priority: priority,
    audience: audience,
    date: "28-09-2026",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    sender: "Prof. S. Noorul Hassan (Head of Department)",
    isRead: false
  };

  HOD_NOTIFICATIONS.unshift(newNotif);
  alert(`Announcement dispatched.`);

  document.getElementById('msgTitle').value = "";
  document.getElementById('msgBody').value = "";

  renderHodBroadcastHistory();
  renderStudentNotifications();
}

function deleteHodNotice(id) {
  if (confirm(`Revoke broadcast #${id}?`)) {
    HOD_NOTIFICATIONS = HOD_NOTIFICATIONS.filter(n => n.id !== id);
    renderHodBroadcastHistory();
    renderStudentNotifications();
  }
}

function renderHodBroadcastHistory() {
  const container = document.getElementById('hodDispatchedList');
  const countBadge = document.getElementById('activeNotifCount');
  if (!container) return;

  if (countBadge) countBadge.textContent = `${HOD_NOTIFICATIONS.length} Notice${HOD_NOTIFICATIONS.length === 1 ? '' : 's'} Active`;

  if (HOD_NOTIFICATIONS.length === 0) {
    container.innerHTML = `<div class="text-center py-6 text-slate-400 font-mono text-xs">No active notices broadcast yet.</div>`;
    return;
  }

  container.innerHTML = HOD_NOTIFICATIONS.map(n => `
    <div class="p-3.5 theme-card-subtle rounded-lg space-y-1.5 border">
      <div class="flex justify-between items-start">
        <div class="flex items-center space-x-2">
          <span class="font-bold text-inherit">${n.title}</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
            n.priority === 'Urgent' ? 'bg-rose-100 text-rose-800' :
            n.priority === 'Important' ? 'bg-amber-100 text-amber-800' :
            'bg-blue-100 text-blue-800'
          }">${n.priority}</span>
        </div>
        <button onclick="deleteHodNotice('${n.id}')" class="text-rose-600 hover:text-rose-800 text-xs cursor-pointer">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
      <p class="text-slate-500 text-xs">${n.body}</p>
      <div class="pt-2 border-t text-[10px] font-mono text-slate-400 flex items-center justify-between" style="border-color: var(--border-main);">
        <span>Target: ${n.audience}</span>
        <span>${n.date} at ${n.time}</span>
      </div>
    </div>
  `).join('');
}

function pushLiveNotification(title, message) {
  HOD_NOTIFICATIONS.unshift({
    id: `NOTIF-${Math.floor(1000 + Math.random() * 9000)}`,
    title: title,
    body: message,
    priority: "Important",
    audience: "Student Terminal",
    date: "28-09-2026",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    sender: "ERP Authorization Desk",
    isRead: false
  });
  renderStudentNotifications();
}

function renderStudentLeaves(reg) {
  const container = document.getElementById('studentLeaveList');
  if (!container) return;
  const leaves = LEAVE_APPLICATIONS.filter(l => l.reg === reg);

  if (leaves.length === 0) {
    container.innerHTML = `<div class="text-xs text-slate-400 font-mono text-center py-4">No active leave records for your registration number.</div>`;
    return;
  }

  container.innerHTML = leaves.map(l => `
    <div class="p-3 sm:p-3.5 theme-card-subtle rounded-lg space-y-2 text-xs border">
      <div class="flex justify-between items-start">
        <div>
          <span class="font-bold text-inherit">${l.id}</span>
          <span class="text-slate-500 ml-2 font-mono text-[11px] block sm:inline">Period: ${l.from} to ${l.to}</span>
        </div>
        <span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
          l.finalStatus === 'Approved' ? 'bg-emerald-100 text-emerald-800' :
          l.finalStatus.includes('Rejected') ? 'bg-rose-100 text-rose-800' :
          'bg-amber-100 text-amber-800'
        }">${l.finalStatus}</span>
      </div>
      <div class="text-slate-500"><strong>Reason:</strong> ${l.reason}</div>
    </div>
  `).join('');
}

function renderStudentOdLedger(reg) {
  const container = document.getElementById('odLedgerList');
  if (!container) return;
  const ods = OD_APPLICATIONS.filter(o => o.reg === reg);

  const pendingStat = document.getElementById('statPendingOd');
  if (pendingStat) {
    pendingStat.textContent = ods.filter(o => o.finalStatus !== 'Approved' && !o.finalStatus.includes('Rejected')).length;
  }

  if (ods.length === 0) {
    container.innerHTML = `<div class="text-xs text-slate-400 font-mono text-center py-4">No on-duty records logged for your registration number.</div>`;
    return;
  }

  container.innerHTML = ods.map(o => `
    <div class="p-3 sm:p-3.5 theme-card-subtle rounded-lg space-y-2 text-xs border">
      <div class="flex justify-between items-start">
        <div>
          <span class="font-bold text-inherit">${o.title}</span>
          <span class="text-slate-500 text-[11px] block font-mono">Token: ${o.token} • ${o.category}</span>
        </div>
        <span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
          o.finalStatus === 'Approved' ? 'bg-emerald-100 text-emerald-800' :
          o.finalStatus.includes('Rejected') ? 'bg-rose-100 text-rose-800' :
          'bg-amber-100 text-amber-800'
        }">${o.finalStatus}</span>
      </div>
      <div class="text-slate-500 font-mono text-[11px] space-y-0.5">
        <p>Venue: ${o.venue}</p>
        <p>Duration: ${o.from} to ${o.to}</p>
      </div>
    </div>
  `).join('');
}

function toggleNotificationDropdown() {
  const tray = document.getElementById('notifDropdown');
  const backdrop = document.getElementById('notifBackdrop');
  if (!tray) return;

  const willOpen = tray.classList.contains('hidden');
  if (willOpen) {
    tray.classList.remove('hidden');
    if (backdrop) backdrop.classList.remove('hidden');
  } else {
    tray.classList.add('hidden');
    if (backdrop) backdrop.classList.add('hidden');
  }
}

function markAllNotifsRead() {
  HOD_NOTIFICATIONS.forEach(n => n.isRead = true);
  renderStudentNotifications();
}

function renderStudentNotifications() {
  const unreadCount = HOD_NOTIFICATIONS.filter(n => !n.isRead).length;
  const badge = document.getElementById('notifBadge');
  const dropdownList = document.getElementById('notifDropdownList');
  const bannerContainer = document.getElementById('studentBroadcastBanner');

  if (badge) {
    if (unreadCount > 0) {
      badge.classList.remove('hidden');
      badge.textContent = unreadCount;
    } else {
      badge.classList.add('hidden');
    }
  }

  if (dropdownList) {
    dropdownList.innerHTML = HOD_NOTIFICATIONS.map(n => `
      <div class="p-2.5 rounded-lg border text-xs space-y-1 ${n.isRead ? 'opacity-70 theme-card-subtle' : 'border-blue-500 bg-blue-50/20'}" style="border-color: var(--border-main);">
        <div class="flex items-center justify-between">
          <span class="font-bold text-inherit text-xs">${n.title}</span>
          <span class="text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
            n.priority === 'Urgent' ? 'bg-rose-100 text-rose-800' :
            n.priority === 'Important' ? 'bg-amber-100 text-amber-800' :
            'bg-blue-100 text-blue-800'
          }">${n.priority}</span>
        </div>
        <p class="text-[11px] text-slate-500 leading-snug">${n.body}</p>
      </div>
    `).join('');
  }

  if (bannerContainer && HOD_NOTIFICATIONS.length > 0) {
    const topNotice = HOD_NOTIFICATIONS[0];
    bannerContainer.innerHTML = `
      <div class="p-3.5 sm:p-4 rounded-xl border flex items-start space-x-3 bg-blue-50/80 border-blue-200 text-blue-950 dark:bg-blue-950/20 dark:border-blue-900/40 dark:text-blue-200">
        <div class="p-2 rounded-lg bg-blue-600 text-white shrink-0 mt-0.5">
          <i class="fa-solid fa-bullhorn text-xs sm:text-sm"></i>
        </div>
        <div class="flex-1 text-xs">
          <div class="flex flex-wrap items-center justify-between gap-1 mb-1">
            <span class="font-bold text-xs sm:text-sm leading-tight">${topNotice.title}</span>
            <span class="font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-white/70 dark:bg-black/30">
              ${topNotice.date}
            </span>
          </div>
          <p class="leading-relaxed opacity-90">${topNotice.body}</p>
        </div>
      </div>
    `;
  }
}

function setMapRoute(dest) {
  const path = document.getElementById('mapNavLine');
  const desc = document.getElementById('routeDesc');

  if (!path || !desc) return;

  if (dest === 'admin') {
    path.setAttribute('d', 'M 90 170 L 280 170 L 280 110');
    desc.textContent = "Route: Walk straight down Main Concourse for 50m, then take North Portico entrance to Admin Block.";
  } else if (dest === 'library') {
    path.setAttribute('d', 'M 90 170 L 400 170 L 400 75 L 460 75');
    desc.textContent = "Route: Follow Main Avenue east to central junction (120m), turn north into Central Library.";
  } else if (dest === 'aids') {
    path.setAttribute('d', 'M 90 170 L 280 170 L 280 220');
    desc.textContent = "Route: Walk 50m past Main Portico, turn south to Department of AI&DS (Hall C14).";
  } else if (dest === 'exam') {
    path.setAttribute('d', 'M 90 170 L 400 170 L 400 255 L 460 255');
    desc.textContent = "Route: Proceed through central hallway past the courtyard, turn south to Controller of Examinations (COE) wing.";
  } else if (dest === 'canteen') {
    path.setAttribute('d', 'M 90 170 L 640 170');
    desc.textContent = "Route: Walk straight through the entire main campus arterial road directly to the Cafeteria and Bus Terminus.";
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('aec_theme') || 'light';
  setTheme(savedTheme);
  showPage('home');
});
