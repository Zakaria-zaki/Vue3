import { ref } from "vue";

interface TodoList {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export function useFetchTodo() {
    const todos = ref<TodoList[] | null>(null);
    const isloading = ref(true);
    const errors = ref<any>(null);

    // IFE
    (async() => {
        try {
            todos.value = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
            isloading.value = false
        } catch(e) {
            errors.value = e
        } finally {
            isloading.value = false
        }
    })()


    return {
        todos,
        isloading,
        errors
    }
}