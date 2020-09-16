const Database = require('./db')
const createProffy = require('./createProffy')
Database.then( async (db) => {
    //inserir dados 

    proffyValue = {
        name:"Joaquim Neto2", 
        avatar:"https://avatars2.githubusercontent.com/u/50596250?s=400&u=3f29624595f5ae2daa0617ce054edc5f81ff49b3&v=4", 
        whatsapp:"88-9-94548734", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
       
    }

    classValue = {

        subject: 1, 
        cost:"10.00 "
       
    }

    classScheduleValues = [
        {
            weekday:1,
            time_from :720, 
            time_to:1200
        },
        {
            weekday:0,
            time_from :520, 
            time_to:1200
        }


    ]
    // await createProffy(db,{proffyValue,classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)
})