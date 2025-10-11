import { TAdminBookingRow } from "../../../types/Booking";
import { TAdminCategoryRow } from "../../../types/Category";
import { TAdminEquipmentRow } from "../../../types/Equipment";
import { TAdminMessageRow } from "../../../types/Message";
import { TAdminPictureRow } from "../../../types/Picture";
import { TAdminUserRow } from "../../../types/User";
import { TAdminVehicleRow } from "../../../types/Vehicle";

interface IVehiclePageAdmin {
    page: "vehicles",
    datas: TAdminVehicleRow[]
    columns: string[]
}

interface IUserPageAdmin {
    page: "users",
    datas: TAdminUserRow[]
    columns: string[]
}

interface ICategoryPageAdmin {
    page: "categories",
    datas: TAdminCategoryRow[]
    columns: string[]
}

interface IEquipmentPageAdmin {
    page: "equipments",
    datas: TAdminEquipmentRow[]
    columns: string[]
}

interface IPicturePageAdmin {
    page: "pictures",
    datas: TAdminPictureRow[]
    columns: string[]
}

interface IBookingPageAdmin {
    page: "bookings",
    datas: TAdminBookingRow[]
    columns: string[]
}

interface IMessagePageAdmin {
    page: "messages",
    datas: TAdminMessageRow[]
    columns: string[]
}

export interface IDataTableAdmin {
    pageData: IVehiclePageAdmin | IUserPageAdmin | ICategoryPageAdmin | IEquipmentPageAdmin | IPicturePageAdmin |IBookingPageAdmin | IMessagePageAdmin
    onSelect: (id: string) => void,
    onUpdate: (id: string) => void,
    onDelete: (id: string) => void,
}