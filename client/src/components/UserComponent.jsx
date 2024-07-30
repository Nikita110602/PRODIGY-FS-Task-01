
import PropTypes from 'prop-types';

export default function UserComponent({ Data }) {
  console.log(Data);
  return (
    <>
      <h1>All Users</h1>
      <div className='flex flex-wrap'>
        {Data && Data.length > 0 ? (
          Data.map((user, index) => (
            <div key={index} className='px-16 border-custom rounded-xl m-10'>
              <h1 className='mb-10 mx-20'>{user.Fullname}</h1>
              <span className='m-5'>{user.Dob}</span>
              <span className='m-5'>{user.Gender}</span>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </>
  );
}

UserComponent.propTypes = {
  Data: PropTypes.arrayOf(
    PropTypes.shape({
      Fullname: PropTypes.string.isRequired,
      Dob: PropTypes.string.isRequired,
      Gender: PropTypes.string.isRequired,
    })
  ).isRequired,
};
