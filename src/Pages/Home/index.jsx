
import { useState } from 'react';
import './style.css';
import { Plus, Student } from 'phosphor-react';
import { CardUser } from '../../components/CardUser';

export function Home() {
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState([]);

    function handleAddStundent() {
        if(studentName !== '') {
            const newStudent = {
                name: studentName
            }
    
            setStudents([...students, newStudent]);
            // setStudents(prevState => [...prevState, newStudent]);
            setStudentName('');
        } else {
            alert('Digite um nome');
        }
        
    }

    function handleRemoveStudent(idStudent) {
        setStudents(students.filter((e, index) => index !== idStudent));
    }

    return (
        <div className="container"> 
            <h1>Lista de Alunos do Curso</h1>;
            <div className="input-container">;
                <input type="text" placeholder="Nome do aluno" onChange={e => setStudentName(e.target.value)} value={studentName}/>;
                <button title="Adicionar aluno" onClick={handleAddStundent}>
                    <Plus size={24} weight="bold" color='#FFF' />    
                </button>;
            </div>
            <div className="container-list">
                {
                   students.map((student, index) => <CardUser key={index} name={student.name} idStudent={index} onDeleteStudent={handleRemoveStudent} />) 
                }
            </div>;
        </div>
    )
}