import React from 'react'
import { blue } from '@material-ui/core/colors';

const styles = {
    pie: {
      color: blue,
      borderRadius: 10
    }
  };

const Pie = () => {
    return (
        <footer style={styles.pie}>Derechos Reservados ramselvin.com</footer>
    )
}

export default Pie;