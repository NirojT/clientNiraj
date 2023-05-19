import { IToasterData } from "../../../global/itoaster";
import { IEventData, IEventDataDetail, IEventDataError } from "./interface";

export class EventClass {
    validate = (data: IEventData) => {
        let error = {} as IEventDataError;
        if (!data.title) error.title = 'title is required';
        if (!data.description) error.description = 'description is required';
        return error;
    }

    addEvent = (
        eventData: IEventData,
        addEvent: any,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setToasterData: React.Dispatch<React.SetStateAction<IToasterData>>,
        setEventData: any,
        setEventDataError: any,
    ) => {
        let error = this.validate(eventData);
        if (Object.keys(error).length > 0) {
            setEventDataError(error);
            setToasterData({
                open: true,
                message: 'Please fill all the required fields',
                severity: 'warning',
            })
            return;
        }
        setLoading(true);
        addEvent(eventData).then((res: boolean) => {
            setLoading(false);
            if (res) {
                setToasterData({
                    open: true,
                    message: 'Event added successfully',
                    severity: 'success',
                });
                setEventData({
                    title: '',
                    description: '',
                    eventDate: new Date().toISOString().substring(0, 16),
                    file: '',
                });
                setEventDataError({} as IEventDataError);
            } else {
                setToasterData({
                    open: true,
                    message: 'Something went wrong',
                    severity: 'error',
                });
            }
        }).catch(() => {
            setLoading(false);
            setToasterData({
                open: true,
                message: 'Something went wrong',
                severity: 'error',
            });
        })
    }
    updateEvent = (
        id: number | string | undefined,
        eventData: IEventData,
        updateEvent: any,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setToasterData: React.Dispatch<React.SetStateAction<IToasterData>>,
        setEventData: any,
        setEventDataError: any,
    ) => {
        let error = this.validate(eventData);
        if (Object.keys(error).length > 0) {
            setEventDataError(error);
            setToasterData({
                open: true,
                message: 'Please fill all the required fields',
                severity: 'warning',
            })
            return;
        }
        setLoading(true);
        updateEvent(id, eventData).then((res: boolean) => {
            setLoading(false);
            if (res) {
                setToasterData({
                    open: true,
                    message: 'Event updated successfully',
                    severity: 'success',
                });
                setEventData({
                    title: '',
                    description: '',
                    eventDate: new Date().toISOString().substring(0, 16),
                    file: '',
                });
                setEventDataError({} as IEventDataError);
            } else {
                setToasterData({
                    open: true,
                    message: 'Something went wrong',
                    severity: 'error',
                });
            }
        }).catch(() => {
            setLoading(false);
            setToasterData({
                open: true,
                message: 'Something went wrong',
                severity: 'error',
            });
        })
    }
    deleteEvent = (
        id: number | string | number,
        deleteEvent: any,
        setDeleting: React.Dispatch<React.SetStateAction<boolean>>,
        setToasterData: React.Dispatch<React.SetStateAction<IToasterData>>,
        setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>,
        setData: React.Dispatch<React.SetStateAction<IEventDataDetail>>,
        getEvents: any
    ) => {
        deleteEvent(id)
            .then((res: boolean) => {
                setDeleting(false);
                if (res) {
                    setToasterData({
                        open: true,
                        message: 'Event deleted successfully',
                        severity: 'success',
                    });
                    setOpenDelete(false);
                    setData({} as IEventDataDetail);
                    getEvents();
                } else {
                    setToasterData({
                        open: true,
                        message: 'Something went wrong',
                        severity: 'error',
                    });
                }
            })
            .catch(() => {
                setDeleting(false);
                setToasterData({
                    open: true,
                    message: 'Something went wrong',
                    severity: 'error',
                });
            })
    }
}