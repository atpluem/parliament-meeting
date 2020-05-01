export class Usermodule {
    public PersonalID : string;
    public PartyName : string;
    public PartyPosName : string;
    public SubMinistryName : string;
    public CouncilposName : string;
    public MinistryPosName : string;
    public Surname : string;
    public Lastname : string;
    public DOB : Date;
    public EducationDegree : string;
    public Password : string;
    public MemberPicture : string;

    constructor(personalID : string,
        partyName : string,
        partyPosName : string,
        subMinistryName : string,
        councilPosName : string,
        ministryPosName : string,
        educationDegree : string,
        surname : string,
        lastname : string,
        DOB : Date,
        password : string,
        memberPicture : string){
        this.PersonalID = personalID;
        this.PartyName = partyName;
        this.PartyPosName = partyPosName;
        this.SubMinistryName = subMinistryName;
        this.CouncilposName = councilPosName;
        this.MinistryPosName = ministryPosName;
        this.Surname = surname;
        this.Lastname = lastname;
        this.DOB = DOB;
        this.EducationDegree = educationDegree;
        this.Password = password;
        this.MemberPicture = memberPicture;
    }
}