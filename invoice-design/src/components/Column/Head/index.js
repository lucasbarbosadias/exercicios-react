const ColumnHead = ( { className, children } ) => {

  return(
    <th className={className}>
      {children}
    </th>      
  )
}

export default ColumnHead