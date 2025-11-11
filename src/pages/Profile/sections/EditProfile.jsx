import Avatar from "../../../components/common/Avatar";
import FormBtn from "../../../components/form/FormBtn";
import FormError from "../../../components/form/FormError";

const EditProfile = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-myPurple mb-4">Edit Profile</h2>

      <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
        <div className="flex items-center gap-2">
          <Avatar name="John Doe" size="lg" />
          <div>
            <p className="font-semibold text-lg">John Doe</p>
            <p className="text-sm text-stone-600">JohnDoe@gmail.com</p>
          </div>
        </div>

        <button className="py-1 px-4 bg-myGreen text-white rounded-lg cursor-pointer hover:brightness-90">
          edit
        </button>
      </div>

      <form>
        <div className="mb-8">
          <div className="grid grid-cols-4 p-2 not-last:border-b border-gray-300">
            <label htmlFor="name" className="lg:text-lg font-semibold">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="col-span-3 border-none outline-0"
              value="John Doe"
              disabled
            />
          </div>

          <div className="grid grid-cols-4 p-2 not-last:border-b border-gray-300">
            <label htmlFor="email" className="lg:text-lg font-semibold">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="col-span-3 border-none outline-0"
              value="JohnDoe@gmail.com"
              disabled
            />
          </div>

          <div className="grid grid-cols-4 p-2 not-last:border-b border-gray-300">
            <label htmlFor="mobileNumber" className="lg:text-lg font-semibold">
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              type="text"
              className="col-span-3 border-none outline-0"
              value="1234567890"
              disabled
            />
          </div>

          <div className="grid grid-cols-4 p-2 not-last:border-b border-gray-300">
            <label htmlFor="location" className="lg:text-lg font-semibold">
              Location
            </label>
            <input
              id="location"
              type="text"
              className="col-span-3 border-none outline-0"
              value="Saudi Arabia"
              disabled
            />
          </div>
        </div>

        <div className="w-fit">
          <FormBtn title="Save Changes" />
        </div>
        <FormError errorMsg="" />
      </form>
    </section>
  );
};

export default EditProfile;
