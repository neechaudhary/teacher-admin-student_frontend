import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API } from './../constant/constant'

const View_tobe_review = () => {
    const [toBeReviewedPaper, setToBeReviewedPaper] = React.useState([])

    const getToBeReviewedPaper = () => {
        axios.get(`${API}/image_upload/getallreviewed`, {
            headers: {
                'content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        }).then(function (response) {
            //handle success
            console.log(response.data)
            setToBeReviewedPaper(response.data)
        }).catch(function (error) {
            //handle error
            console.log(error)
        })
    }
    React.useEffect(() => {
        getToBeReviewedPaper();
    }, [])
  return (
    <div>
      <div className='px-2'>
        <div className='flex justify-end '>
          <Link to="/teacher-management">
          <button className='p-3 bg-[#19BC95] w-[200px] text-white'>Close</button>
          </Link>
        </div>

        <table className='w-full'>
          <thead >
            <tr className='border shadow-md'>
              <th className='p-2'>Name</th>
              
              <th className='p-2'>File name</th>
            </tr>
          </thead> {toBeReviewedPaper.map((item, index) => {
            return (
              <tr className='border' key={index}>

                <td className='p-2' >{item.name}</td>
                <td className='p-2'>{item.file_name}</td>


              </tr>)
          })}
        </table>
      </div>
    </div>
  )
}

export default View_tobe_review