function ModalDetailShift() {
  return (
    <>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title- fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">Show a second modal and hide this one with the button below.</div>
            <div className="modal-footer d-grid ms-auto">
              <button className="btn btn-primary w-auto" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                Open second
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">Hide this modal and show the first with the button below.</div>
            <div className="modal-footer d-grid ms-auto">
              <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDetailShift;
