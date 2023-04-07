export type TaskEntity = {
    id: number,
    title: string,
    description: string,
    done: boolean
}

export type Task = Omit<TaskEntity, "id" | "done">