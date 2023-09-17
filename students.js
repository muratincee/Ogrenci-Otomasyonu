let students = [
    {
        id: 1,
        name: "Mehmet",
        lastName: "Yılmaz",
        age: 28,
        gender: "Erkek",
        photo: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Ayşe",
        lastName: "Demir",
        age: 25,
        gender: "Kadın",
        photo: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 3,
        name: "Mehmet",
        lastName: "Kaya",
        age: 35,
        gender: "Erkek",
        photo: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id: 4,
        name: "Zeynep",
        lastName: "Şahin",
        age: 30,
        gender: "Kadın",
        photo: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        id: 5,
        name: "Fatih",
        lastName: "Arslan",
        age: 22,
        gender: "Erkek",
        photo: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        id: 6,
        name: "Elif",
        lastName: "Özkan",
        age: 29,
        gender: "Kadın",
        photo: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
        id: 7,
        name: "Ali",
        lastName: "Yıldız",
        age: 31,
        gender: "Erkek",
        photo: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        id: 8,
        name: "Selin",
        lastName: "Karadeniz",
        age: 27,
        gender: "Kadın",
        photo: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
        id: 9,
        name: "Can",
        lastName: "Çelik",
        age: 24,
        gender: "Erkek",
        photo: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
        id: 10,
        name: "Sude",
        lastName: "Aktaş",
        age: 26,
        gender: "Kadın",
        photo: "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
        id: 11,
        name: "Emre",
        lastName: "Öztürk",
        age: 33,
        gender: "Erkek",
        photo: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        id: 12,
        name: "Yasemin",
        lastName: "Atasoy",
        age: 29,
        gender: "Kadın",
        photo: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        id: 13,
        name: "Cem",
        lastName: "Korkmaz",
        age: 28,
        gender: "Erkek",
        photo: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        id: 14,
        name: "Aslı",
        lastName: "Çalışkan",
        age: 26,
        gender: "Kadın",
        photo: "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
        id: 15,
        name: "Burak",
        lastName: "Taşkın",
        age: 32,
        gender: "Erkek",
        photo: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
        id: 16,
        name: "Deniz",
        lastName: "Eren",
        age: 24,
        gender: "Kadın",
        photo: "https://randomuser.me/api/portraits/women/16.jpg"
    },
    {
        id: 17,
        name: "Hakan",
        lastName: "Serbest",
        age: 30,
        gender: "Erkek",
        photo: "https://randomuser.me/api/portraits/men/17.jpg"
    },
    {
        id: 18,
        name: "Gamze",
        lastName: "Uçar",
        age: 28,
        gender: "Kadın",
        photo: "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
        id: 19,
        name: "Ömer",
        lastName: "Kaptan",
        age: 27,
        gender: "Erkek",
        photo: "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
        id: 20,
        name: "Pınar",
        lastName: "Başaran",
        age: 31,
        gender: "Kadın",
        photo: "https://randomuser.me/api/portraits/women/20.jpg"
    }
];

if(localStorage.studentsLocal) {
    students = JSON.parse(localStorage.studentsLocal);
}

let lastGeneratedId = 20;

if(localStorage.localLastGeneratedId) {
    lastGeneratedId = Number(localStorage.localLastGeneratedId);
}

function generateId() {
    lastGeneratedId += 1;
    localStorage.localLastGeneratedId = lastGeneratedId;
    return lastGeneratedId;
}

function addStudent(name, lastName, age, gender) {
    students.push(
        {
            id: generateId(),
            name: name,
            lastName: lastName,
            age: age,
            gender: gender,
            photo: "https://t4.ftcdn.net/jpg/02/23/50/73/360_F_223507349_F5RFU3kL6eMt5LijOaMbWLeHUTv165CB.jpg"
        }
    );
    saveLocal();
}

function findStudentIndex(studentId) {
    for(let i=0; i<students.length; i++) {
        if(students[i].id === studentId) {
            return i;
        }
    }
        return -1;
}

function removeStudent(studentId) {
    const studentIndex = findStudentIndex(studentId);
    if(studentIndex > -1) {
        students.splice(studentIndex, 1);

        saveLocal();

    } else {

    }
}

function updateStudent(studentId, name, lastName, age, gender) {
    studentIndex = findStudentIndex(studentId);
    
    if(studentIndex === -1) {
        return;
    }

    const student = students[studentIndex];
    student.name = name;
    student.lastName = lastName;
    student.age = age;
    student.gender = gender;

    saveLocal();

}

function saveLocal() {
    localStorage.studentsLocal = JSON.stringify(students);
}

//-------------- DOM ---------------

const studentList = document.querySelector('#studentList');

function renderStudentList() {

    studentList.innerHTML = '';

    for(student of students) {
        studentList.innerHTML += `<tr><td class="tdItem" data-studentid="${student.id}"><img width="128px" src="${student.photo}"><br>
        ${student.name} ${student.lastName}<br>
        ${student.age}<br>
        ${student.gender}<br>
        <button data-btndltId="${student.id}" class="btnDeleteItem">Sil</button>
        <button data-btneditId="${student.id}" class="btnEditItem">Düzenle</button><br><br>
        </tr></td>`
    }

    bindEvents();
}

renderStudentList();

const btnAddStudent = document.querySelector('#btnAddStudent');

btnAddStudent.addEventListener('click', newStudent);

function newStudent() {
    
        const name = prompt('Ad gir');
        const lastName = prompt('Soyad gir');
        const age = prompt('Yas gir');
        const gender = prompt('Cinsiyet gir');
    
        addStudent(name, lastName, age, gender);

        renderStudentList();
}

function bindEvents() {
    const deleteStudentItems = document.querySelectorAll('.btnDeleteItem');

    for(deleteStudentItem of deleteStudentItems) {
        deleteStudentItem.addEventListener('click', deleteStudent);
    }

    const editStudentItems = document.querySelectorAll('.btnEditItem');

    for(editStudentItem of editStudentItems) {
        editStudentItem.addEventListener('click', editStudent);
    }
}

bindEvents();

function deleteStudent() {
    const studentId = Number(this.dataset.btndltid);
    removeStudent(studentId);

    renderStudentList();
}

function editStudent() {
    const studentId = Number(this.dataset.btneditid);

    const name = prompt('Ad Duzenle');
    const lastName = prompt('Soyad Düzenle');
    const age = prompt('Yas Duzenle');
    const gender = prompt('Cinsiyet Duzenle');

    updateStudent(studentId, name, lastName, age, gender);

    renderStudentList();
}

const btnSearch = document.querySelector('#btnSearch');

btnSearch.addEventListener('click', searchStudents);

function searchStudents() {
    const inputSearch = document.querySelector('#inputSearch');
    const searchText = inputSearch.value;

    studentList.innerHTML = "";

    for(student of students) {
        if(student.name == searchText) {

            studentList.innerHTML += `<tr><td class="tdItem" data-studentid="${student.id}"><img width="128px" src="${student.photo}"><br>
        ${student.name} ${student.lastName}<br>
        ${student.age}<br>
        ${student.gender}<br>
        <button data-btndltId="${student.id}" class="btnDeleteItem">Sil</button>
        <button data-btneditId="${student.id}" class="btnEditItem">Düzenle</button><br><br>
        </tr></td>`
        }    
    } 
        bindEvents();
}

const btnReset = document.querySelector('#btnReset');

btnReset.addEventListener('click', resetFilter);

function resetFilter() {
    inputSearch.value = '';

    renderStudentList();

    // bindEvents();
}
