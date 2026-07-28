import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'

const dashboard = ({ sortData, fetchData, clearData, filterData, data }) => {


    return (
        <div className='grid grid-cols-3 sm:grid-cols-5'>
            <Sidebar sortData={sortData} fetchData={fetchData} clearData={clearData} filterData={filterData} />
            <div className='col-span-2 sm:col-span-4 h-[80vh] overflow-y-auto py-5'>
                {
                    data.length > 0
                        ?
                        <div className='flex gap-3 flex-wrap justify-center items-center'>
                            {
                                data.map((item) => {
                                    return (
                                        <Card key={item.id} data={item} />
                                    )
                                })
                            }
                        </div>
                        :
                        <div className='flex justify-center items-center text-xl h-full text-blue-500 font-semibold'>
                            Data Not Available!
                        </div>
                }
            </div>
        </div>
    )
}

export default dashboard