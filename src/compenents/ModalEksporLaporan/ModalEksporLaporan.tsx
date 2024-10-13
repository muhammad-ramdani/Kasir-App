import React from "react";
import './ModalEksporlaporan.css'

interface EskporModalLaporanProps {
    onClose: () => void;
    onConfirm: () => void;
    format: 'PDF' | 'Excel';
    isOpen: boolean;
    jenisLaporan: string;
}

const EksporModalLaporan: React.FC<EskporModalLaporanProps> = ({ onClose, onConfirm, format, isOpen, jenisLaporan }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-ekspor-laporan" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title h5-modal-title">Ekspor Laporan Transaksi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body body-modal-ekspor-laporan">
                        <p className="p-modal-body">
                            Rekap {jenisLaporan} untuk periode 01 Oktober 2024 hingga 31 Oktober 2024 akan diekspor dalam format {format} dan disimpan di perangkat yang sedang digunakan. Lanjutkan?
                        </p>
                    </div>
                    <div className="footer-modal-ekspor-laporan">
                        <button type="button" className="btn btn-modal-ekspor" onClick={onConfirm}>Ya, Lanjutkan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EksporModalLaporan;
