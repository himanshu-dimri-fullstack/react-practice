import { useState } from "react"

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    phone: "",
    city: "",
    bio: "",
    dob: "",
    profile: ""
  })

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: ""
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    if (type == "checkbox") {
      setForm(
        {
          ...form,
          [name]: checked ? [...form[name], value] : form[name].filter((item) => item !== value)
        }
      )
    }
    else {
      setForm({
        ...form,
        [name]: value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name == "") {
      setError({
        nameError: "Name is required"
      });
      return;
    }
    else if (form.email == "") {
      setError({
        emailError: "Email is required"
      });
      return;
    }
    else if (form.password == "") {
      setError({
        passwordError: "Password is required"
      });
      return;
    }
    setError({});
    setForm({
      name: "",
      email: "",
      password: "",
      gender: "",
      hobbies: [],
      phone: "",
      city: "",
      bio: "",
      dob: "",
      profile: ""
    });
    console.log(form);
  }

  return (
    <div className="flex py-10 justify-center w-screen bg-blue-100">
      <form onSubmit={handleSubmit} className="sm:w-[40%] w-[60%] bg-white rounded-xl shadow-xl p-8">
        <div className="mb-3">
          <label className="text-sm" htmlFor="name">Name</label><br />
          <input onChange={changeHandler} className={`focus:bg-blue-100 text-sm w-full border ${error.nameError ? "border-red-300" : "border-blue-300"} rounded-lg outline-none px-2 py-1 mt-2`} value={form.name} name="name" id="name" type="text" />
          {error.nameError ? <p className="text-red-500 text-sm mt-2">{error.nameError}</p> : <></>}
        </div>
        <div className="mb-3">
          <label className="text-sm" htmlFor="email">Email</label><br />
          <input onChange={changeHandler} className={`focus:bg-blue-100 text-sm w-full border ${error.emailError ? "border-red-300" : "border-blue-300"} rounded-lg outline-none px-2 py-1 mt-2`} value={form.email} name="email" id="email" type="email" />
          {error.emailError ? <p className="text-red-500 text-sm mt-2">{error.emailError}</p> : <></>}
        </div>
        <div className="mb-3">
          <label className="text-sm" htmlFor="password">Password</label><br />
          <input onChange={changeHandler} className={`focus:bg-blue-100 text-sm w-full border ${error.passwordError ? "border-red-300" : "border-blue-300"} rounded-lg outline-none px-2 py-1 mt-2`} value={form.password} name="password" id="password" type="password" />
          {error.passwordError ? <p className="text-red-500 text-sm mt-2">{error.passwordError}</p> : <></>}
        </div>

        <div className="flex justify-between mb-3 gap-2">
          <div>
            <label className="text-sm">Gender:</label><br />
            <input onChange={changeHandler} checked={form.gender === "male"} type="radio" name="gender" id="male" value="male" /><label className="text-sm ml-2 mr-4" htmlFor="male">Male</label>
            <input onChange={changeHandler} checked={form.gender === "female"} type="radio" name="gender" id="female" value="female" /><label className="text-sm ml-2 mr-4" htmlFor="female">Female</label>
          </div>
          <div>
            <label className="text-sm">Hobbies:</label><br />
            <input onChange={changeHandler} checked={form.hobbies.includes("cricket")} name="hobbies" id="cricket" type="checkbox" value="cricket" /><label className="text-sm ml-2 mr-4" htmlFor="cricket">Cricket</label>
            <input onChange={changeHandler} checked={form.hobbies.includes("music")} name="hobbies" id="music" type="checkbox" value="music" /><label className="text-sm ml-2 mr-4" htmlFor="music">Music</label>
            <input onChange={changeHandler} checked={form.hobbies.includes("movie")} name="hobbies" id="movie" type="checkbox" value="movie" /><label className="text-sm ml-2 mr-4" htmlFor="movie">Movie</label>
          </div>
        </div>
        <div className="flex justify-between mb-3 gap-2">
          <div>
            <label className="text-sm" htmlFor="phone">Phone Number</label><br />
            <input onChange={changeHandler} value={form.phone} className="focus:bg-blue-100 text-sm border w-full border-blue-300 rounded-lg outline-none px-2 py-1 mt-2" name="phone" id="phone" type="text" />
          </div>
          <div>
            <label className="text-sm" htmlFor="city">City</label><br />
            <input onChange={changeHandler} value={form.city} className="focus:bg-blue-100 text-sm border w-full border-blue-300 rounded-lg outline-none px-2 py-1 mt-2" name="city" id="city" type="text" />
          </div>
        </div>

        <div className="mb-3">
          <label className="text-sm" htmlFor="city">Bio</label><br />
          <textarea onChange={changeHandler} value={form.bio} className="focus:bg-blue-100 text-sm border w-full border-blue-300 rounded-lg outline-none px-2 py-1 mt-2" name="bio" id="bio"></textarea>
        </div>

        <div className="mb-3">
          <label className="text-sm" htmlFor="dob">Date of Birth</label><br />
          <input onChange={changeHandler} value={form.dob} className="focus:bg-blue-100 text-sm border w-full border-blue-300 rounded-lg outline-none px-2 py-1 mt-2" name="dob" id="dob" type="date" />
        </div>
        <div className="mb-3">
          <label className="text-sm" htmlFor="profile">Profile Image</label><br />
          <input onChange={changeHandler} value={form.profile} className="focus:bg-blue-100 text-sm border w-full border-blue-300 rounded-lg outline-none px-2 py-1 mt-2" name="profile" id="profile" type="file" />
        </div>
        <div className="mt-6 text-center">
          <button type="submit" className="border border-blue-500 bg-blue-500 text-lg text-white px-4 py-1 rounded">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App