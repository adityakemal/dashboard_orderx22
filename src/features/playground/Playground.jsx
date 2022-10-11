import React, { useEffect, useState, useTransition } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import AvarikJson from '../../app/avarik.json'
import newDataUpdate from './newData03Aug.json'
import { filterAndSortArray } from 'multiple-array-filter';
import { META_FILTER } from './helperFilter';


var jsonQuery = require('json-query')

export default function Playground() {

    const [InitialData] = useState(AvarikJson)
    const [Data, setData] = useState([])
    const [DataOri, setDataOri] = useState([])
    const [pending, startTransition] = useTransition();





    const [Counter, setCounter] = useState(120)

    useEffect(() => {
        handleGetData()
        console.log('rendered')
        const cenverted = AvarikJson.map(res => {
            // delete res.battle_stats
            // delete res.traits
            return res
        })


        console.log(cenverted[0], '>>>>')
        let newremap = newDataUpdate.map(res => {
            let x = { ...res }
            delete x.image
            delete x.Image_original
            delete x.image_preview
            delete x.image_thumbnail

            // add x
            x.Image = res.Image_original
            // add res 
            res.image_original = res.Image_original
            res.name = res.Name
            res.id = res.Id
            res.description = res.Description

            let traitData = [
                "Faction",
                "Class",
                "Subclass",
                "Gender",
                "Background",
                "Body",
                "Hair",
                "Weapon",
                "Armor",
                "Head",
            ].map(t => (res[t].length !== 0 ? { trait_type: t, value: res[t] } : null))
            return {
                ...res,
                battle_stats: x,
                traits: traitData.filter(fd => fd !== null)
            }
        })

        console.log(newremap, `new data length : ${newremap.length}`)
        // console.log(newremap.filter(val => val.Subclass.includes('Legen')), `filter :`)
    }, [Counter])

    const handleGetData = () => {
        const data = InitialData.slice(0, Counter)
        console.log(InitialData)

        startTransition(() => {
            setData(data)
        });
    }

    const handleLoadMore = (v) => {
        // setCounter(v)
        if (Counter !== InitialData.length) {
            setCounter(Counter + 20)
            console.log(Counter + 20)
        }
    }

    const add = () => {
        setCounter(Counter + 1)
    }

    const [Filter, setFilter] = useState([])

    const handleFilter = (type, value, id) => {
        console.log(value, id, type)
        const filtered = [
            ...Filter,
            { id: id, trait_type: type, trait_value: value }
        ].sort((a, b) => a.id - b.id)
        setFilter(filtered)
    }

    const filterToQueryString = (name) => {
        let filterByname = Filter?.filter(res => res.trait_type === name)
        if (filterByname.length === 0) {
            return
        }
        let arrToString = filterByname?.map(val => `${name}=${val.trait_value}`).toString().replaceAll(',', ' | ')
        let finalString = `[*${arrToString}]`
        return finalString
    }

    const handleQuery = () => {
        const data = InitialData

        // let queryFaction = Filter.filter(res => res.trait_type === 'Faction')
        // let factionString = queryFaction.map(val => `Faction=${val.trait_value}`).toString().replaceAll(',', ' | ')
        // let finalString = `[*${factionString}]`
        // console.log(finalString)

        // var result = jsonQuery(finalString, { data: data }).value
        //
        let allQueryString = Filter.map(res => filterToQueryString(res?.trait_type)).toString().replaceAll(',', '')

        var result = jsonQuery(allQueryString, { data: data }).value
        // // var result = jsonQuery(['[*Faction=?]', 'ignis || Glacia'], { data: data }).value

        console.log(result)
    }


    return (
        <div className='container-sm play'>

            <div className="row">
                <div className="col-md-3 bg-warning">
                    <h1>filter</h1>

                    <button onClick={handleQuery}>wuery</button>
                    {
                        META_FILTER.map((res, i) => (
                            <div className="boxfil border mb-3" key={i}>
                                <h3>{res.trait_type} - {res.id}</h3>
                                {
                                    res?.options.map((opt, j) => (
                                        <button key={j} onClick={() => handleFilter(res.trait_type, opt.trait_value, res.id)}>{opt.trait_value}</button>
                                    ))
                                }
                            </div>
                        ))
                    }



                </div>
                <div className="col-md-9">
                    <pre className='bg-white'>
                        <small>
                            {JSON.stringify(Filter, null, 2)}
                        </small>
                    </pre>
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={Counter}
                        loadMore={handleLoadMore}
                        hasMore={true || false}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        <div className='row'>
                            {
                                Data.map((res, i) => (
                                    <div className=' col-md-3 mb-3 border px-3 py-1 bg-info text-white' key={res.id} >
                                        <img src={res.image} alt="" className='img-fluid' /> <br />
                                        <small className='m-0'>
                                            {i + 1} {res.name}-{res.Subclass}
                                        </small>
                                    </div>
                                ))
                            }
                        </div>
                    </InfiniteScroll>
                    {/* 
                    <div className='wrap' >

                        {
                            [1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 11, , 1].map((res, i) => (
                                <li>
                                    <h1>oke oke</h1>
                                </li>
                            ))
                        }
                    </div> */}

                </div>
            </div>

        </div>
    )
}
