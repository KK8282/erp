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

let STUDENTS_DB = [];

// Clean parser accurately matching every column of your Excel file
function parseExcelWorksheet(worksheet) {
  const rows = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
  if (!rows || rows.length === 0) return [];

  return rows.map(r => {
    // 1. Identification
    const reg = String(r['Register Number'] || '').trim();
    const name = String(r['Name'] || '').trim();
    const dept = String(r['Department'] || 'AI&DS').trim();
    const prog = String(r['Name of the Programme'] || 'B.Tech').trim();
    const batch = String(r['Batch'] || '2023 - 2027').trim();
    const sem = String(r['Semester'] || '5').trim();
    const acadYear = String(r['Academic year'] || '2025-2026').trim();

    // 2. Personal
    const dobRaw = r[' Date of Birth'] || r['Date of Birth'] || '';
    let dob = String(dobRaw).trim();
    if (dob.includes('T')) dob = dob.split('T')[0];
    if (dob.includes(' 00:00:00')) dob = dob.replace(' 00:00:00', '');

    const gender = String(r['Gender'] || '').trim();
    const blood = String(r['Blood Group'] || '').trim();
    const community = String(r['Community'] || '').trim();
    const religion = String(r['Religion'] || '').trim();
    const aadhar = String(r['Aadhar Card Number'] || '').trim();

    // 3. Contacts
    const email = String(r['E mail Id'] || '').trim();
    const mobile = String(r['Whatsapp Number'] || '').replace('.0', '').trim();

    // 4. Parents
    const fatherName = String(r['Father Name '] || r['Father Name'] || '').trim();
    const fatherMobile = String(r["Father's Mobile Number"] || '').replace('.0', '').trim();
    const motherName = String(r['Mother Name'] || '').trim();
    const motherMobile = String(r["Mother's Mobile Number"] || '').replace('.0', '').trim();

    // 5. Address
    const street = String(r['Address'] || '').trim();
    const city = String(r['City/Village'] || '').trim();
    const district = String(r['District'] || '').trim();
    const pincode = String(r['Pincode'] || '').replace('.0', '').trim();
    const fullAddress = [street, city, district, pincode].filter(Boolean).join(', ');

    return {
      reg,
      name,
      dept: prog.includes(dept) ? dept : `${prog} ${dept}`,
      batch,
      sem: `Semester ${sem}`,
      acadYear,
      dob,
      gender,
      blood,
      community,
      religion,
      aadhar,
      email,
      mobile,
      fatherName,
      fatherMobile,
      motherName,
      motherMobile,
      address: fullAddress,
      pin: "1234" // Default PIN
    };
  }).filter(s => s.reg !== "");
}

// Background Excel reader supporting both students.xlsx and students.xlsx.xlsx
async function loadStudentDataFromExcel() {
  const isLocalFileProtocol = window.location.protocol === 'file:';
  const offlineBanner = document.getElementById('offlineFileBanner');

  if (isLocalFileProtocol) {
    if (offlineBanner) offlineBanner.classList.remove('hidden');
    return;
  }

  const fileCandidates = ['students.xlsx', 'students.xlsx.xlsx', 'Students.xlsx'];
  for (const fileName of fileCandidates) {
    try {
      const response = await fetch(fileName);
      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        if (typeof XLSX === 'undefined') return;

        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        STUDENTS_DB = parseExcelWorksheet(firstSheet);

        if (STUDENTS_DB.length > 0) {
          console.log(`Loaded ${STUDENTS_DB.length} verified records from ${fileName}`);
          break;
        }
      }
    } catch (e) {}
  }
}

// Local manual file picker for file:/// offline runs
function initLocalFilePicker() {
  const filePicker = document.getElementById('localExcelPicker');
  const offlineBanner = document.getElementById('offlineFileBanner');

  if (filePicker) {
    filePicker.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          STUDENTS_DB = parseExcelWorksheet(firstSheet);

          if (STUDENTS_DB.length > 0) {
            alert(`Loaded ${STUDENTS_DB.length} students from ${file.name}!`);
            if (offlineBanner) offlineBanner.classList.add('hidden');
          }
        } catch (err) {
          alert("Error parsing file.");
        }
      };
      reader.readAsArrayBuffer(file);
    });
  }
}

let OD_APPLICATIONS = [];
let LEAVE_APPLICATIONS = [];
let dedicatedRole = "student";
let loggedInUser = null;

function openDedicatedLogin(role) {
  dedicatedRole = role;
  const idInput = document.getElementById('loginId');
  const passInput = document.getElementById('loginPass');
  idInput.value = "";
  passInput.value = "";
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

function handleLogin() {
  const enteredId = document.getElementById('loginId').value.trim();
  const enteredPin = document.getElementById('loginPass').value.trim();

  if (dedicatedRole === 'student') {
    if (STUDENTS_DB.length === 0) {
      alert("Please select your students.xlsx file in the prompt above first.");
      return;
    }

    const student = STUDENTS_DB.find(st => st.reg.toLowerCase() === enteredId.toLowerCase() && (st.pin === enteredPin || enteredPin === "1234"));

    if (student) {
      loggedInUser = student;
      setupStudentDashboard(student);
      showPage('erp');
    } else {
      alert(`Invalid Register Number or PIN.\nRegister Number "${enteredId}" was not found.`);
    }
  } else if (dedicatedRole === 'staff') {
    if (enteredId === "STAFF-AI-104" && enteredPin === "1234") {
      showPage('staff');
    } else {
      alert("Invalid Staff Credentials.");
    }
  } else if (dedicatedRole === 'hod') {
    if (enteredId === "HOD-AIDS-01" && enteredPin === "1234") {
      showPage('hod');
    } else {
      alert("Invalid HOD Credentials.");
    }
  }
}

function showPage(pageId) {
  ['home', 'login', 'erp', 'staff', 'hod'].forEach(p => {
    const el = document.getElementById(`page-${p}`);
    if (el) el.style.setProperty('display', 'none', 'important');
  });
  const target = document.getElementById(`page-${pageId}`);
  if (target) target.style.setProperty('display', 'flex', 'important');
  window.scrollTo(0, 0);
}

function logout() {
  loggedInUser = null;
  document.getElementById('loginId').value = "";
  document.getElementById('loginPass').value = "";
  showPage('home');
}

// Binds every verified Excel column to the student's dashboard
function setupStudentDashboard(st) {
  if (!st) return;

  // Header & Initials
  document.getElementById('dashWelcome').textContent = st.name.toUpperCase();
  const names = st.name.replace(/[^a-zA-Z ]/g, "").split(' ').filter(Boolean);
  document.getElementById('avatarInitials').textContent = names.length > 1 ? (names[0][0] + names[1][0]).toUpperCase() : st.name.substring(0, 2).toUpperCase();

  // Primary Metrics
  document.getElementById('cardRollNo').textContent = st.reg;
  document.getElementById('metricRoll').textContent = st.reg;
  document.getElementById('cardDept').textContent = st.dept;
  document.getElementById('cardBatchDisplay').textContent = st.batch;
  document.getElementById('cardTerm').textContent = st.sem;
  document.getElementById('cardAcademicYear').textContent = `Academic Year: ${st.acadYear}`;

  // Personal Info
  document.getElementById('cardDob').textContent = st.dob || "N/A";
  document.getElementById('cardGender').textContent = `Gender: ${st.gender || 'N/A'}`;
  document.getElementById('cardBlood').textContent = st.blood || "N/A";
  document.getElementById('cardCommunity').textContent = `Community: ${st.community || 'N/A'}`;
  document.getElementById('cardMobile').textContent = st.mobile || "N/A";
  document.getElementById('cardEmail').textContent = st.email || "N/A";

  // Family Info
  document.getElementById('cardFatherName').textContent = st.fatherName || "N/A";
  document.getElementById('cardFatherMobile').textContent = `Mobile: ${st.fatherMobile || 'N/A'}`;
  document.getElementById('cardMotherName').textContent = st.motherName || "N/A";
  document.getElementById('cardMotherMobile').textContent = `Mobile: ${st.motherMobile || 'N/A'}`;
  document.getElementById('cardAadhar').textContent = st.aadhar || "Verified";
  document.getElementById('cardReligion').textContent = `Religion: ${st.religion || 'N/A'}`;
  document.getElementById('cardFullAddress').textContent = st.address || "Tamil Nadu";

  // Prefill in Leave form
  document.getElementById('leaveStudentName').value = st.name;
  document.getElementById('leaveRegNo').value = st.reg;
  document.getElementById('leaveAddress').value = st.address;

  renderStudentLeaves(st.reg);
  renderStudentOdLedger(st.reg);
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
    from,
    to,
    reason,
    address: address || loggedInUser.address,
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
    alert("Please enter title, venue, and dates.");
    return;
  }

  const newOD = {
    token: `OD-AEC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    reg: loggedInUser.reg,
    name: loggedInUser.name,
    title,
    category,
    venue,
    from,
    to,
    finalStatus: "Pending Counsellor"
  };

  OD_APPLICATIONS.unshift(newOD);
  alert(`OD Application #${newOD.token} dispatched for ${loggedInUser.name}!`);
  document.getElementById('odTitle').value = "";
  document.getElementById('odVenue').value = "";
  renderStudentOdLedger(loggedInUser.reg);
}

function renderStudentLeaves(reg) {
  const container = document.getElementById('studentLeaveList');
  if (!container) return;
  const leaves = LEAVE_APPLICATIONS.filter(l => l.reg === reg);

  if (leaves.length === 0) {
    container.innerHTML = `<div class="text-xs text-slate-400 font-mono text-center py-4">No active leave records.</div>`;
    return;
  }

  container.innerHTML = leaves.map(l => `
    <div class="p-3.5 theme-card-subtle rounded-lg space-y-2 text-xs border">
      <div class="flex justify-between items-start">
        <div>
          <span class="font-bold text-inherit">${l.id}</span>
          <span class="text-slate-500 ml-2 font-mono text-[11px]">${l.from} to ${l.to}</span>
        </div>
        <span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-100 text-amber-800">${l.finalStatus}</span>
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
    pendingStat.textContent = ods.filter(o => o.finalStatus !== 'Approved').length;
  }

  if (ods.length === 0) {
    container.innerHTML = `<div class="text-xs text-slate-400 font-mono text-center py-4">No on-duty records logged.</div>`;
    return;
  }

  container.innerHTML = ods.map(o => `
    <div class="p-3.5 theme-card-subtle rounded-lg space-y-2 text-xs border">
      <div class="flex justify-between items-start">
        <div>
          <span class="font-bold text-inherit">${o.title}</span>
          <span class="text-slate-500 text-[11px] block font-mono">${o.token} • ${o.category}</span>
        </div>
        <span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-100 text-amber-800">${o.finalStatus}</span>
      </div>
      <div class="text-slate-500 font-mono text-[11px]">
        <p>Venue: ${o.venue}</p>
        <p>Duration: ${o.from} to ${o.to}</p>
      </div>
    </div>
  `).join('');
}

window.addEventListener('DOMContentLoaded', async () => {
  const savedTheme = localStorage.getItem('aec_theme') || 'light';
  setTheme(savedTheme);
  initLocalFilePicker();
  await loadStudentDataFromExcel();
  showPage('home');
});
