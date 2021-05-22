using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data;
using Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{


    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUser(){
            
             return await  _context.User.ToListAsync();
           
           
        }
      [Authorize]
         [HttpGet("{Id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id){
            
           return await _context.User.FindAsync(id);
          
        }
    }
}