import { create } from 'zustand';
import { axios_auth, axios_file_with_auth, axios_no_auth } from '../../../global/config';
import { IEventData, IEventDataError } from './interface';

export const useEventStore = create((set, get) => ({
    events: [],
    eventData: {
        title: "",
        description: "",
        eventDate: new Date().toISOString().substring(0, 16),
        file: "",
    },
    updateEventData: {},
    eventDataError: {
        title: "",
        description: "",
        eventDate: "",
        file: "",
    },
    setEventData: (data: IEventData) => {
        set((state: any) => ({
            eventData: {
                ...state.eventData,
                ...data
            }
        }))
    },
    setEventDataError: (data: IEventDataError) => {
        set((state: any) => ({
            eventDataError: {
                ...state.eventDataError,
                ...data
            }
        }))
    },
    setUpdateEventData: (data: IEventData) => {
        set((state: any) => ({
            updateEventData: {
                ...state.updateEventData,
                ...data
            }
        }))
    },
    addEvent: async (data: IEventData) => {
        try {
            let res = await axios_file_with_auth.post('event/create', data)
            if (res.data.status === 200) return true;
            return false;
        }
        catch (err) {
            return false;
        }
    },
    getEvents: async () => {
        try {
            let res = await axios_no_auth.get('event/get-all')
            if (res.data.status === 200) {
                set((state: any) => ({
                    events: res.data.notices
                }))
            }
        }
        catch (err) {
            return null
        }
    },
    updateEvent: async (id: string | number | undefined, data: IEventData) => {
        try {
            let res = await axios_file_with_auth.put(`event/update/${id}`, data)
            if (res.data.status === 200) return true;
            return false;
        } catch (err) {
            return false;
        }
    },
    getEventById: async (id: string | number | undefined) => {
        try {
            let res = await axios_no_auth.get(`event/get/${id}`)
            if (res.data.status === 200) {
                set((state: any) => ({
                    eventData: res.data.event
                }))
            }
        } catch (err) {
            return null
        }
    },
    deleteEvent: async (id: string | number | undefined) => {
        try {
            let res = await axios_auth.delete(`event/delete/${id}`)
            if (res.data.status === 200) return true;
            return false;
        } catch (err) {
            return false;
        }
    }
}))