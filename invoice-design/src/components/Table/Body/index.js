const TableBody = ( { className, children } ) =>{

  return(
    <thead className={className}>
      { children }
    </thead>
  )
}

export default TableBody