const Row = ( { className, children, key } ) => {

  return(
    <tr key={key} className={className}>
      {children}
    </tr>
  )
}

export default Row