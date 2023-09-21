const persons = [
    { id: 1, name: '张三', age: 25, gender: '男' },
    { id: 2, name: '张四', age: 32, gender: '女' },
    { id: 3, name: '张五', age: 28, gender: '男' },
    { id: 4, name: '张六', age: 22, gender: '女' },
    { id: 5, name: '张七', age: 30, gender: '男' },
];

const personListElement = document.getElementById('personList');
const sortSelectElement = document.getElementById('sort');
const genderSelectElement = document.getElementById('gender');

// 人员列表
const renderPersonList = (persons) => {
    personListElement.innerHTML = '';

    persons.forEach(person => {
        const { id, name, age, gender } = person;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${gender}</td>
        `;
        personListElement.appendChild(row);
    });
};

// 按性别筛选
const filterByGender = (persons, gender) => {
    if (gender === 'all') {
        return persons;
    }
    return persons.filter(person => person.gender === gender);
};

// 按年龄排序
const sortByAge = (persons, order) => {
    const sortedPersons = [...persons];
    sortedPersons.sort((a, b) => {
        return order === 'asc' ? a.age - b.age : b.age - a.age;
    });
    return sortedPersons;
};

// 排序的时候添加监视器
sortSelectElement.addEventListener('change', () => {
    const selectedSort = sortSelectElement.value;
    let sortedPersons = [...persons];

    if (selectedSort === 'ageAsc' || selectedSort === 'ageDesc') {
        const order = selectedSort === 'ageAsc' ? 'asc' : 'desc';
        sortedPersons = sortByAge(sortedPersons, order);
    }

    renderPersonList(filterByGender(sortedPersons, genderSelectElement.value));
});

// 按性别筛选的时候添加监视器
genderSelectElement.addEventListener('change', () => {
    const selectedGender = genderSelectElement.value;
    renderPersonList(filterByGender(persons, selectedGender));
});

// 初始化列表
renderPersonList(persons);