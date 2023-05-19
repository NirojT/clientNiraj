export interface IEventData {
    title: string;
    description: string;
    eventDate?: string;
    file: string | null | undefined;
}

export interface IEventDataError {
    title: string;
    description: string;
    eventDate?: string;
    file?: string;
}

export interface IEventDataDetail {
    id: number,
    title: string,
    description: string,
    date: string,
    imageName: string,
    isActive: boolean,
    mainUser: null,
    eventDate: string,
}

export interface DeleteModalProps {
    openDelete: boolean;
    setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>
    data: IEventDataDetail
    setData: React.Dispatch<React.SetStateAction<IEventDataDetail>>
}