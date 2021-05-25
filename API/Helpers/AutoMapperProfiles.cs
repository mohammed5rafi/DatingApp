using API.DTOs;
using AutoMapper;
using Entities;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser,MemberDto>();
            CreateMap<Photo,PhotoDto>();
        }
    }
}