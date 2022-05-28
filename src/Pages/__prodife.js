{/* <div className="my-profile-container">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                                <AiOutlineMail />
                            </label>

                            <input
                                type="email"
                                value={user?.email}
                                readOnly
                                // placeholder="Product Name"
                                className="input input-bordered"
                                {...register("email", {
                                    required: {
                                        value: false,
                                        message: 'Name is Required'
                                    }

                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">User Name</span>
                                <GiPlagueDoctorProfile />
                            </label>
                            <input
                                type="text"
                                value={user?.displayName}
                                readOnly
                                // placeholder="Product Description"
                                className="input input-bordered "
                                {...register("displayName", {
                                    required: {
                                        value: false,
                                        message: 'Product Description is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.displayName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.displayName.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone </span><RiPhoneFill />

                            </label>
                            <input
                                type="number"
                                defaultValue={user?.phoneNumber}
                                className="input input-bordered "
                                {...register("phoneNumber", {
                                    required: {
                                        value: false,
                                        message: 'Minimum Order Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Address</span>
                                <MdOutlineLocationOn />
                            </label>
                            <input
                                type="text"
                                placeholder="Available Quantity"
                                className="input input-bordered "
                                {...register("address", {
                                    required: {
                                        value: false,
                                        message: 'Available Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Birthday</span><BsFillCalendarDateFill />
                            </label>
                            <input
                                type="date"
                                placeholder="Product Price"
                                className="input input-bordered"
                                {...register("birthday", {
                                    required: {
                                        value: false,
                                        message: 'Product Price is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.birthday?.type === 'required' && <span className="label-text-alt text-red-500">{errors.birthday.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo</span><MdAddAPhoto />
                            </label>
                            <input
                                type="file"
                                className="input input-bordered "
                                {...register("image", {
                                    required: {
                                        value: false,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>

                        <div className="add-product-btn">
                            <input className=' text-white' type="submit" value="Upload Product" />
                        </div>
                    </form>


                </div> */}