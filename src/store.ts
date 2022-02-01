import create from "zustand";
import { persist } from "zustand/middleware";
type state = {
    people: string[],
    addPerson: (person: string) => void;    
};
type stateBG ={
    dark: any,
    toggleDarkMode: () => void;
}

export const UseAppStore = create<state>(persist(set => ({
    people: ["Abhi", "John"],
    addPerson: (person) =>
        set((state => 
            ({ people: [...state.people, person] }))),

}), {
    name: "add_people"
}));

export const SettingsStore = create<stateBG> (persist(set =>({
    dark: false,
    toggleDarkMode:()=> set((state)=>({dark:!state.dark})),
}),{
    name:"user_settings"
}))
