const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    //Inserir dados 
    proffyValue = {
        name: 'Matheus Abreu',
        avatar: 'https://avatars1.githubusercontent.com/u/52500186?s=460&u=3e7eb08ff040a1a18977a2ba392c91e175f5ab5b&v=4',
        whatsapp: '8199382993',
        bio:'Engenheiro Civil louco por conhecimento'
    }

    classValue = {
        subject: '1',
        cost: '30',


    }

    classScheduleValues = [
        //Class_id virá pelo BD
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos

    // Todos os proffys

    
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar as classes de um determinado professor e trazer os dados do professor

    const selectClassesaAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesaAndProffys)
    // O horário que a pessoa trabalha, é das 8h - 18 
    // o horário do time_from (8h) precisa ser antes ou igual ao hoário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    // console.log(selectClassesSchedules)
})