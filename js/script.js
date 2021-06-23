// Descrizione: Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

const app = new Vue(
    {
        el: '#root',
        data:{
            tasks:[
                'task1',
                'task2',
                'task3'
            ]
        },
        methods:{
            removeItem(index){
                this.tasks.splice(index, 1);
            }
        }
    }
);