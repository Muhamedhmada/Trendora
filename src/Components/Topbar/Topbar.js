import { motion } from "framer-motion";
import {Car} from "../../Assets/SVGs";
import "./Topbar.css";
function Topbar() {
  return (
    <div className='topbar-container'>
      <motion.div
        // initial={{}}
        animate={{ x: ["0%", "-100%", "00%"] }}
        transition={{
          duration: 30, // السرعة
          repeat: Infinity, // مالا نهاية
          ease: "linear", // حركة ثابتة
        }}
      >
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
        <p>
          <Car width='30' />
          free shipping on orders up 9999 LE
        </p>
      </motion.div>
    </div>
  );
}
export default Topbar;
