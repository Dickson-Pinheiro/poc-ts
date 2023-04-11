import prisma from "../src/database/connection.js"

async function main(){
    await prisma.tasks.createMany({
        data: [
            {
                title: "Revisar conteúdo da aula",
                description: "Aula de tratamento de erros da primeira semana do módulo 5"
            },
            {
                title: "Criar poc sobre typescript",
                description: "Desenvolver um pequeno projeto utilizando typescript"
            },
            {
             title: "implementar rota de validação de cep no drivent",
             description: "Consumir a api via cep para validar cep"   
            },
            {
                title: "Criar poc sobre Prisma",
                description: "implementar Prisma em um projeto que utiliza apenas pg"
            }
        ]
    })
}

main()
.then(() => {
    console.log("Registros realizados com sucesso!")
})
.catch(e => {
    console.error(e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})