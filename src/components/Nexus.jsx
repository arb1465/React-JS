// import React from 'react'

const Nexus = ({mydata, mydata2}) => {
    console.log(mydata, mydata2)
    const {name: name1, email: email1} = mydata
    const {name: name2, email: email2} = mydata2
  return (
    <div>
      <br></br>
      <div>
      Name : {name1}
      </div>
      <div>
      Email : {email1}
      </div><br></br>
      <div>
      Name : {name2}
      </div>
      <div>
      Email : {email2}
      </div><br></br>
    </div>
  )
}

export default Nexus
