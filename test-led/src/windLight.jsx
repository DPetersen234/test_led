import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from './context'
const WindLight = ({ location, wind }) => {

    const {render} = useContext(AppContext)
    const [dataStream, setDataStream] = useState('00000000000000$0000000000000000#00000%000000&00000')
    const warning = {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        border: '3px solid black'
    }
    const advisory = {
        width: '100px',
        height: '100px',
        backgroundColor: 'purple',
        border: '3px solid black'
    }
    const watch = {
        width: '100px',
        height: '100px',
        backgroundColor: 'yellow',
        border: '3px solid black'
    }
    const clear = {
        width: '100px',
        height: '100px',
        backgroundColor: 'green',
        border: '3px solid black'
    }
    const holder = {
        width:'50%',
        height: 'auto',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        margin:'2%',
        border:'2px solid black'
    }
    function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substring(0, index) + chr + str.substring(index + 1);
    }
    function changeDataStream(arr, str) {
        let defstr = str
        arr.map((item) => {
            if (item.category === '18 kt steady-state' && item.type === 'Advisory') {
                defstr = setCharAt(defstr, (location === 'KSC' ? 34 : 40), '1')
                console.log('defstr1', defstr)
            }
            else if (item.category === '22 kt steady-state' && item.type === 'Advisory') {
                defstr = setCharAt(defstr, 41, '1')
                console.log('defstr2', defstr)
            }
            else if (item.category === '25 kt observed' && item.type === 'Advisory') {
                defstr = setCharAt(defstr, 47, '1')
                console.log('defstr3', defstr)
            }
            else if (item.category === 'Strong Winds' && item.type === 'Warning') {
                defstr = setCharAt(defstr, (location === 'KSC' ? 35 : location === 'CCSFS' ? 42 : 48), '1')
                console.log('defstr4', defstr)
            }
            else if (item.category === 'Damaging Winds' && item.type === 'Warning') {
                defstr = setCharAt(defstr, (location === 'KSC' ? 36 : location === 'CCSFS' ? 43 : 49), '1')
                console.log('defstr5', defstr)
            }
            else if (item.category === '18 kt steady-state' && item.type === 'Clear') {
                defstr = setCharAt(defstr, (location === 'KSC' ? 34 : 40), '0')
                console.log('defstr6', defstr)
            }
            else if (item.category === '22 kt steady-state' && item.type === 'Clear') {
                defstr = setCharAt(defstr, 41, '0')
                console.log('defstr7', defstr)
            }
            else if (item.category === '25 kt observed' && item.type === 'Clear') {
                defstr = setCharAt(defstr, 47, '0')
                console.log('defstr3', defstr)
            }
            else if (item.category === 'Strong Winds' && item.type === 'Clear') {
                defstr = setCharAt(defstr, (location === 'KSC' ? 35 : location === 'CCSFS' ? 42 : 48), '0')
                console.log('defstr8', defstr)
            }
           else if (item.category === 'Damaging Winds' && item.type === 'Clear') {
                defstr = setCharAt(defstr, (location === 'KSC' ? 36 : location === 'CCSFS' ? 43 : 49), '0')
                console.log('defstr9', defstr)
            }
            console.log('finalstring', defstr)
           setDataStream(defstr)
        })
    }
    async function awaitCall (arr, str) {
        console.log('calling function')
        const result = await changeDataStream(arr, str)
        console.log(result)
    }
    useEffect(() => {
        changeDataStream(wind, dataStream)
        
    }, [wind])
    
   if (location === 'Patrick SFB'){
    return(<div style = {holder}>Patrick
        <div style={(dataStream.charAt(47) === '0') ? clear : advisory}>25</div>
        <div style={(dataStream.charAt(48) === '0') ? clear : warning}>strong</div>
        <div style={(dataStream.charAt(49) === '0') ? clear : warning}>damaging</div>
    </div>)
    
   } else if(location === 'KSC') {
   return (<div style = {holder}>KSC
        <div style={(dataStream.charAt(34) === '0') ? clear : advisory}>18</div>
        <div style={(dataStream.charAt(35) === '0') ? clear : warning}>strong</div>
        <div style={(dataStream.charAt(36) === '0') ? clear : warning}>damaging</div>
    </div>)
   } else if (location === 'CCSFS') {
    return (<div style = {holder}>CCSFS
        <div style={(dataStream.charAt(40) === '0') ? clear : advisory}>18</div>
        <div style={(dataStream.charAt(41) === '0') ? clear : advisory}>22</div>
        <div style={(dataStream.charAt(42) === '0') ? clear : warning}>strong</div>
        <div style={(dataStream.charAt(43) === '0') ? clear : warning}>damaging</div>
    </div>)
   }
}

export default WindLight