import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from './context';
const Light = ({ data}) => {
  
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
console.log(data.charAt(1))

 return(
  <>
  <div style={{
    textAlign:'center'
  }}>Data String: {data}</div>
  <div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    margin:'2%'
  }}>PHASE 1 Lightning Watches
  <div style={data.charAt(1) === '1' ? watch: clear}>SLF Phase 1</div>
  <div style={data.charAt(2) === '1' ? watch: clear}> KSC Industrial Phase 1</div>
  <div style={data.charAt(3) === '1' ? watch: clear}> LC-39 Area Phase 1</div>
  <div style={data.charAt(4) === '1' ? watch: clear}> CX-40/41 Phase 1</div>
  <div style={data.charAt(5) === '1' ? watch: clear}> CX-37/ITL Phase 1</div>
  <div style={data.charAt(6) === '1' ? watch: clear}> Cape Central Phase 1</div>
  <div style={data.charAt(7) === '1' ? watch: clear}> Port Area Phase 1</div>
  <div style={data.charAt(8) === '1' ? watch: clear}>PAFB Phase 1</div>
  <div style={data.charAt(9) === '1' ? watch: clear}> Astrotech Phase 1</div>
  <div style={data.charAt(10) === '1' ? watch: clear}> CX-36/46 Phase 1</div>
  <div style={data.charAt(11) === '1' ? watch: clear}> Cidco Park Phase 1</div>
  <div style={data.charAt(12) === '1' ? watch: clear}> CX-20-16/LZ Phase 1</div>
  </div>
  <div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    margin:'2%'
  }}>PHASE 2 Lightning Warnings
  <div style={data.charAt(18) === '1' ? warning: clear}>SLF Phase 2</div>
  <div style={data.charAt(19) === '1' ? warning: clear}> KSC Industrial Phase 2</div>
  <div style={data.charAt(20) === '1' ? warning: clear}> LC-39 Area Phase 2</div>
  <div style={data.charAt(21) === '1' ? warning: clear}> CX-40/41 Phase 2</div>
  <div style={data.charAt(22) === '1' ? warning: clear}> CX-37/ITL Phase 2</div>
  <div style={data.charAt(23) === '1' ? warning: clear}> Cape Central Phase 2</div>
  <div style={data.charAt(24) === '1' ? warning: clear}> Port Area Phase 2</div>
  <div style={data.charAt(25) === '1' ? warning: clear}>PAFB Phase 2</div>
  <div style={data.charAt(26) === '1' ? warning: clear}> Astrotech Phase 2</div>
  <div style={data.charAt(27) === '1' ? warning: clear}> CX-36/46 Phase 2</div>
  <div style={data.charAt(28) === '1' ? warning: clear}> Cidco Park Phase 2</div>
  <div style={data.charAt(29) === '1' ? warning: clear}> CX-20-16/LZ Phase 2</div>
  </div>
  <div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    margin:'2%'
  }}>KSC Wind WWA's
  <div style={data.charAt(34) === '1' ? advisory: clear}> KSC 18 Kts Steady State Winds</div>
  <div style={data.charAt(35) === '1' ? warning: clear}> KSC Strong Winds</div>
  <div style={data.charAt(36) === '1' ? warning: clear}> KSC Damaging Winds</div>
  </div>
  <div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    margin:'2%'
  }}>CCSFS Wind WWA's
  <div style={data.charAt(40) === '1' ? advisory: clear}> CCAFS 18 Kts Steady State Winds</div>
  <div style={data.charAt(41) === '1' ? advisory: clear}> CCAFS 22 Kts Steady State Winds</div>
  <div style={data.charAt(42) === '1' ? warning: clear}> CCAFS Strong Winds</div>
  <div style={data.charAt(43) === '1' ? warning: clear}> CCAFS Damaging Winds</div>
  </div>
  <div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    margin:'2%'
  }}>PSFB Wind WWA's
  <div style={data.charAt(47) === '1' ? advisory: clear}> PSFB 25 Kts Observed Winds</div>
  <div style={data.charAt(48) === '1' ? warning: clear}> PSFB Strong Winds</div>
  <div style={data.charAt(49) === '1' ? warning: clear}> PSFB Damaging Winds</div>
  </div>


  </>
 )


}

export default Light