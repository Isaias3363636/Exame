class Exam { 
    constructor(gabarito, peso){ 
        this.gabarito = gabarito; 
        this.peso = peso; 
        this.respostas = []; 
    } 
    
    add(exam) {
        
        exam.grade = Object.keys(exam.values).reduce((total, q, index) => {
            if (exam.values[q] === this.gabarito[index]) {
              return total + this.peso[index];
            }
            return total;
          }, 0);
          
        this.respostas.push(exam);
    }
    
    avg() {
        let sum = this.respostas.reduce(
          (sum, exame) => sum + exame.grade,
          0
        );
        return sum / this.respostas.length;
    }

    min(count = 1) {
        return this.respostas
          .map((exam) => exam.grade)
          .sort((a, b) => a - b)
          .slice(0, count);
    }

    max(count = 1) {
        return this.respostas
          .map((exam) => exam.grade)
          .sort((a, b) => b - a)
          .slice(0, count);       
    }

    lt(limit) {
        return this.respostas
          .map((exam) => exam.grade)
          .filter((grade) => grade <= limit);
    }

    gt(limit) {
        return this.respostas
          .map((exam) => exam.grade)
          .filter((grade) => grade > limit);
    }
} 

const exame = new Exam( 
    ['a', 'b', 'c', 'd', 'e'], 
    [2, 2, 2, 2, 2] 
);

exame.add({
    aluno: 'Joao',
    values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
});

console.log(exame.avg());  
console.log(exame.min()); 
console.log(exame.max());  
console.log(exame.lt(7));  
console.log(exame.gt(7)); 

exame.add({
    aluno: 'Pedro',
    values: { q1: 'd', q2: 'a', q3: 'b', q4: 'c', q5: 'e' },
  });

console.log(exame.avg());  
console.log(exame.min()); 
console.log(exame.max());  
console.log(exame.lt(7));  
console.log(exame.gt(7)); 

exame.add({
    aluno: 'Lucas',
    values: { q1: 'a', q2: 'b', q3: 'c', q4: 'd', q5: 'e' },
  });

console.log(exame.avg());  
console.log(exame.min()); 
console.log(exame.max());  
console.log(exame.lt(7));  
console.log(exame.gt(7)); 
