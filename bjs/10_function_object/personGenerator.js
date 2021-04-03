const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Маша",
            "id_3": "Ира",
            "id_4": "Арина",
            "id_5": "Диана",
            "id_6": "Нина",
            "id_7": "Михаль",
            "id_8": "Дина",
            "id_9": "Елена",
            "id_10": "Анна"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function(json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        return this.randomValue(this.firstNameMaleJson);

    },

    randomFirsFemaletName: function() {

        return this.randomValue(this.firstNameFemaleJson);

    },


    randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    randomGender: function() {
        const randomGender = this.randomIntNumber(2, 1);
        if (randomGender == 1) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }
    },


    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();

        if (this.person.gender == this.GENDER_MALE) {
            this.person.firstName = this.randomFirstName();
            this.person.surName = this.randomSurname();
        } else {
            this.person.firstName = this.randomFirsFemaletName();
            this.person.surName = `${this.randomSurname()}а`;
        }

        this.person.year = this.randomIntNumber(2020, 1940);

        return this.person;
    },





};