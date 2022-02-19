import UseFirestore from "../hooks/useFirestore"; 
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImg})=>{

    const {docs} = UseFirestore('images')
    console.log(docs)

    return (
        <div className="img-grid">
            {docs && docs.map(doc=>(
                <motion.div 
                    key={doc.id} 
                    whileHover={{opacity: 1}} 
                    layout={true} 
                    className="img-wrap" 
                    onClick={()=>setSelectedImg(doc.url)}
                >
                    <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}} src={doc.url} alt=""/>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid