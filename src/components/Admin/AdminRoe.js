import React, { useState, useEffect } from "react";
import { PencilSquare } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { getRoe, updateRoe, clearErrors } from "../../actions/roeActions";
import Loader from "../inc/Loader/Loader";
// import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { ROE_UPDATE_RESET } from "../../constants/RoeConstants";

function AdminRoe() {
//   const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const roeData = useSelector((state) => state.roe.roe[0]?.roe);
  const { error, isUpdated, loading } = useSelector((state) => state.updateRoe);

  const [roeValue, setRoeValue] = useState("");

    const showEditRoeModal = () => {
      setRoeValue(roeData);

    };

  const updateROE = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("roe",roeValue);

    dispatch(updateRoe(myForm));

  };

  useEffect(() => {
    if(error){
        alert.error(error);
        dispatch(clearErrors());
    }
    if (isUpdated) {
        alert.success("ROE Updated Successfully");
        dispatch(getRoe());
        window.location.reload();
        dispatch({
          type : ROE_UPDATE_RESET
        })
      }
    dispatch(getRoe());
  }, [dispatch,alert,isUpdated,error]);
  return (
    <>
     {loading ? (
        <Loader />
          ) : (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-10 ms-auto p-4 overflow-hidden"
            id="main-content"
          >
            <h3 className="mb-4">ROE</h3>
            {/* Roe section   */}
            <div className="card border-0 shadow mb-4">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover border text-center">
                    <thead>
                      <tr className="bg-dark text-light">
                        <th scope="col">#</th>
                        <th scope="col">ROE</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="align-middle">
                        <td>1</td>
                        <td>{roeData}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary shadow-none btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-Roe" onClick={showEditRoeModal}
                          >
                            <PencilSquare />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Roe section end   */}
          </div>
        </div>
      </div>
    )}
      <div
        className="modal fade"
        id="edit-Roe"
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <form onSubmit={updateROE}>
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Roe</h5>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label className="form-label fw-bold">ROE</label>
                    <input
                      type="number"
                      name="roe"
                      className="form-control shadow-none"
                    //   placeholder={roeData}
                      value={roeValue}
                      onChange={(e) => setRoeValue(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="reset"
                  className="btn text-secondary shadow-none"
                  data-bs-dismiss="modal"
                >
                  CANCEL
                </button>
                <button type="submit" className="btn text-success shadow-none">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminRoe;
