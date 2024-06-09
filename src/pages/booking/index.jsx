import moment from "moment-timezone"
import { useEffect, useState } from "react"
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router";
import Calendar from 'react-calendar';
import Layout from "../../layouts/Layout"
import { LAPANGAN } from "../venue/Venueitem";

const Booking = () => {
    const navigate                          = useNavigate()
    const [valueDate, onChangeDate]         = useState(new Date());
    const [activeDate, setActiveDate]       = useState("")
    const [activeBooking, setActiveBooking] = useState("")
    const [showBooking, setShowBooking]     = useState({ id:"", status:false })
    const [listDate, setListDate]           = useState([])
    const [showFilterTime, setShowFilterTime] = useState(false)
    const [showFilterDate, setShowFilterDate] = useState(false)
    const [activeFilterTime, setActiveFilterTime] = useState("")

    const getOneWeekDate = () => {
        let date = []
        for(let i=0; i<7; i++) {
            date.push(moment().add(i, 'days').toLocaleString())
        }

        setActiveDate(date[0])
        setListDate(date)
    }

    const handleActiveShowBooking = (value) => {
        setShowBooking({
            id : value.id,
            status : value.status
        })

        setActiveBooking("")
    }

    const handleShowFilterTime = (value) => {
        if(value) {
            setShowFilterDate(false)
        }
        
        setShowFilterTime(value)
    }

    const handleShowFilterDate = (value) => {
        if(value) {
            setShowFilterTime(false)
        }

        setShowFilterDate(value)
    }

    const handleSelectedDate = (value) => {
        onChangeDate(value)
        setShowFilterDate(false)
    }

    useEffect(() => {
        getOneWeekDate()
    }, [])

    return (
        <Layout>
            <div className="w-[70%] mx-auto flex min-h-screen flex-col">
                <div className="flex flex-col w-full py-5">
                    <div className="flex">
                        <span className="font-medium text-2xl">Pilih lapangan</span>
                    </div>
                    <div className="flex w-full mt-3">
                        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg w-full border border-gray-100">
                            <div className="flex w-full md:w-8/12 overflow-auto justify-between px-2">
                                {
                                    listDate.length > 0 &&
                                    listDate.map((e, i) => {
                                        return (
                                            <div onClick={() => setActiveDate(e)} className={`min-w-[70px] my-4 mx-2 select-none cursor-pointer rounded-lg ${activeDate === e ? "bg-red-700 shadow-md" : ""}`} key={i}>
                                                <div className="flex h-[65px] w-full flex-col items-center justify-center">
                                                    <div className="flex">
                                                        <span className={`${activeDate === e ? "text-gray-200" : "text-gray-500"}`}>
                                                            {moment(e).format("ddd")}
                                                        </span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className={`${activeDate === e ? "text-white" : "text-black"} font-medium text-xs`}>
                                                            {moment(e).format("DD MMM")}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex w-full md:w-4/12 items-center justify-end px-3">
                                <div className="flex items-center border border-gray-200 rounded-md px-3 py-1 m-1 select-none cursor-pointer" onClick={() => handleShowFilterDate(showFilterDate ? false : true)}>
                                    <div className="flex px-2">
                                        <Icon icon="uiw:date" />
                                    </div>
                                    <div className="flex">
                                        <span className="font-medium">Tanggal</span>
                                    </div>
                                </div>

                                <div className="flex items-center border border-gray-200 rounded-md px-3 py-1 m-1 select-none cursor-pointer" onClick={() => handleShowFilterTime(showFilterTime ? false : true)}>
                                    <div className="flex px-2">
                                        <Icon icon="uiw:date" />
                                    </div>
                                    <div className="flex">
                                        <span className="font-medium">Filter Waktu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full justify-end relative">
                    {
                        showFilterTime &&
                        <div className="flex w-4/12 shadow-md border border-gray-200 rounded-md bg-white p-5 flex-col absolute">
                            <div className="flex">
                                <span className="font-medium text-lg">Filter slot waktu</span>
                            </div>
                            <div className="flex my-4 border-y border-dashed border-y-gray-300 py-3 flex-wrap">
                                <div className="flex w-4/12 cursor-pointer select-none" onClick={() => setActiveFilterTime("18:00-19:00")}>
                                    <div className={`flex p-2 m-1 border ${activeFilterTime === "18:00-19:00" ? "border-red-500" : "border-gray-200"} rounded-md w-full justify-center`}>
                                        <span className="text-xs">18:00 - 19:00</span>
                                    </div>
                                </div>

                                <div className="flex w-4/12 cursor-pointer select-none" onClick={() => setActiveFilterTime("19:00-20:00")}>
                                    <div className={`flex p-2 m-1 border ${activeFilterTime === "19:00-20:00" ? "border-red-500" : "border-gray-200"} rounded-md w-full justify-center`}>
                                        <span className="text-xs">19:00 - 20:00</span>
                                    </div>
                                </div>

                                <div className="flex w-4/12 cursor-pointer select-none" onClick={() => setActiveFilterTime("20:00-21:00")}>
                                    <div className={`flex p-2 m-1 border ${activeFilterTime === "20:00-21:00" ? "border-red-500" : "border-gray-200"} rounded-md w-full justify-center`}>
                                        <span className="text-xs">20:00 - 21:00</span>
                                    </div>
                                </div>

                                <div className="flex w-4/12 cursor-pointer select-none" onClick={() => setActiveFilterTime("21:00-22:00")}>
                                    <div className={`flex p-2 m-1 border ${activeFilterTime === "21:00-22:00" ? "border-red-500" : "border-gray-200"} rounded-md w-full justify-center`}>
                                        <span className="text-xs">21:00 - 22:00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <button className="px-4 w-full h-[40px] bg-red-700 rounded-lg" onClick={() => setShowFilterTime(false)}>
                                    <div className="flex items-center justify-center">
                                        <span className="text-white text-sm">
                                            Terapkan
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    }

                    {
                        showFilterDate &&
                        <div className="flex w-4/12 shadow-md border border-gray-200 rounded-md bg-white p-5 flex-col absolute">
                            <Calendar onClickDay={handleSelectedDate} value={valueDate} />
                        </div>
                    }
                </div>

                <div className="flex my-2 flex-col">
                    {
                        LAPANGAN.length > 0 &&
                        LAPANGAN.map((e, i) => {
                            return (
                                <div className="flex items-start my-3" key={i}>
                                    <div className="flex w-4/12">
                                        <img src={e.lapanganImage} alt="lapangan"/>
                                    </div>
                                    <div className="flex w-8/12 px-3 flex-col">
                                        <div className="flex">
                                            <span className="font-medium text-lg">{e.lapanganName}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon icon="mdi:location" className="text-gray-500"/>
                                            <span className="text-md text-gray-500">{e.lokasi}</span>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <button className="px-4 h-[40px] bg-red-700 rounded-lg" onClick={() => handleActiveShowBooking({ id:e.id, status: showBooking.id !== e.id ? true : showBooking.status ? false : true })}>
                                                <div className="flex items-center">
                                                    <span className="text-white text-sm">
                                                        Jadwal tersedia
                                                    </span>
                                                    {
                                                        showBooking.id === e.id &&
                                                        showBooking.status ?
                                                            <Icon icon="hugeicons:circle-arrow-up-01" className="ml-2 text-white"/>
                                                        :
                                                            <Icon icon="hugeicons:circle-arrow-down-01" className="ml-2 text-white"/>
                                                    }
                                                </div>
                                            </button>
                                        </div>

                                        {
                                            showBooking.id === e.id &&
                                            showBooking.status &&
                                            <div className="flex flex-col">
                                                <div className="flex border-t border-t-gray-300 mt-3 py-3 overflow-auto">
                                                    <div onClick={() => setActiveBooking(e.id+"_list_1")} className={`flex cursor-pointer select-none min-w-[200px] border border-gray-300 rounded-lg flex-col px-5 py-2 justify-center mr-3 ${activeBooking === e.id+"_list_1" ? "bg-red-500/10 border border-red-600" : ""}`}>
                                                        <div className="flex w-full justify-center">
                                                            <span className={`${activeBooking === e.id+"_list_1" ? "text-red-400" : "text-gray-400"} text-sm`}>60 menit</span>
                                                        </div>
                                                        <div className="flex w-full justify-center my-1">
                                                            <span className={`${activeBooking === e.id+"_list_1" ? "text-red-600" : "text-black"} text-md font-medium`}>18:00 - 19:00</span>
                                                        </div>
                                                        <div className="flex w-full justify-center">
                                                            <span className={`${activeBooking === e.id+"_list_1" ? "text-red-600" : "text-black"} text-sm font-medium`}>Rp 200.000</span>
                                                        </div>
                                                    </div>

                                                    <div onClick={() => setActiveBooking(e.id+"_list_2")} className={`flex cursor-pointer select-none min-w-[200px] border border-gray-300 rounded-lg flex-col px-5 py-2 justify-center mr-3 ${activeBooking === e.id+"_list_2" ? "bg-red-500/10 border border-red-600" : ""}`}>
                                                        <div className="flex w-full justify-center">
                                                            <span className={`${activeBooking === e.id+"_list_2" ? "text-red-400" : "text-gray-400"} text-sm`}>60 menit</span>
                                                        </div>
                                                        <div className="flex w-full justify-center my-1">
                                                            <span className={`${activeBooking === e.id+"_list_2" ? "text-red-600" : "text-black"} text-md font-medium`}>19:00 - 20:00</span>
                                                        </div>
                                                        <div className="flex w-full justify-center">
                                                            <span className={`${activeBooking === e.id+"_list_2" ? "text-red-600" : "text-black"} text-sm font-medium`}>Rp 200.000</span>
                                                        </div>
                                                    </div>

                                                    <div onClick={() => setActiveBooking(e.id+"_list_3")} className={`flex cursor-pointer select-none min-w-[200px] border border-gray-300 rounded-lg flex-col px-5 py-2 justify-center mr-3 ${activeBooking === e.id+"_list_3" ? "bg-red-500/10 border border-red-600" : ""}`}>
                                                        <div className="flex w-full justify-center">
                                                            <span className={`${activeBooking === e.id+"_list_3" ? "text-red-400" : "text-gray-400"} text-sm`}>60 menit</span>
                                                        </div>
                                                        <div className="flex w-full justify-center my-1">
                                                            <span className={`${activeBooking === e.id+"_list_3" ? "text-red-600" : "text-black"} text-md font-medium`}>21:00 - 22:00</span>
                                                        </div>
                                                        <div className="flex w-full justify-center">
                                                            <span className={`${activeBooking === e.id+"_list_3" ? "text-red-600" : "text-black"} text-sm font-medium`}>Rp 200.000</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {
                                                    activeBooking !== "" &&
                                                    <div className="flex">
                                                        <button className="px-4 h-[40px] bg-red-700 rounded-lg" onClick={() => navigate("/checkout-payment")}>
                                                            <div className="flex items-center">
                                                                <Icon icon="bi:cart" className="text-white mr-2"/>
                                                                <span className="text-white text-sm">
                                                                    Order lapangan
                                                                </span>
                                                            </div>
                                                        </button>
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Booking