const Column = ( { className, children } ) => {

  return(
    <td className={className}>
      {children}
    </td>      
  )
}

export default Column