import React,{useState,useEffect} from 'react';

const Color = ( {color,index}) => {
    const [copied,setCopied] = useState(false)
    
    const Hex = color.hexString();
    const {weight} = color;

    const copyHex = (e)=>{
        let text = e.target.innerText;
        window.navigator.clipboard.writeText(text);
        setCopied(true);
    }
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setCopied(false)
        },3000)
        return ()=>{
            clearTimeout(timeout)
        }
    },[copied])

  return (
      <div className={`${index > 10 ? 'color light' : 'color dark'}`} style={{backgroundColor:Hex}}>
          <div className='info'>
                    <p>{weight}%</p>
                    <p className='info-hex' onClick={copyHex}>{Hex}</p>
                    <p className={`${copied ? 'copy show' : 'copy'}`}>color copied</p>
            </div>
      </div>
  )
}

export default Color