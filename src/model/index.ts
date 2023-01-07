export interface IList {
    id:            string;
    file_name:     string;
    count_version: number;
    owner:         string;
    date_updated:  Date;
    last_activity: Date;
    list_version:  ListVersion[];
    members:       Member[];
    audit_log:     AuditLog[];
    description:   string;
}

export interface AuditLog {
    id:                number;
    is_upload_version: boolean;
    version_upload:    number | null;
    activity:          string;
    date_activity:     Date;
    auther:            string;
}

export interface ListVersion {
    id:          string;
    version:     number;
    upload_by:   string;
    date_upload: Date;
    img_QR_code: string;
    QR_code:     string;
}

export interface Member {
    id:         number;
    email:      string;
    date_add:   Date;
    permission: string;
}
