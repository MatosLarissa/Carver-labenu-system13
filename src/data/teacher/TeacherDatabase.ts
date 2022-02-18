import { Teacher } from "../../entities/users/teachers/teacher";
import { BaseDatabase } from "../BaseDatabase";

export class TeacherDatabase extends BaseDatabase {
    private static tableName = "labenu_system_teacher"

    private toTeacher = (input: Teacher) => new Teacher(
        input.getClassGroup(),
        input.getName(),
        input.getEmail(),
        input.getBirthDate(),
    )

    createTeacher = (teacher: Teacher) => BaseDatabase
        .connection(TeacherDatabase.tableName)
        .insert({
            id: teacher.getId(),
            id_class: teacher.getClassGroup(),
            name: teacher.getName(),
            email: teacher.getEmail(),
            birth_date: teacher.getBirthDate()
        })

    getTeacherByName = async (name: string) => {
        const [result] = await BaseDatabase.connection(TeacherDatabase.tableName).where({ name })
        if (result) return this.toTeacher(result)
    }

    putTeacherClassRoom = (id: string, classRoom: string) => BaseDatabase.connection(TeacherDatabase.tableName).update(classRoom).where(id)
}