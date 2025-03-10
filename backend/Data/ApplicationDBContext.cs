using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Vote> Votes { get; set; }
        public DbSet<ContactSubmission> ContactSubmissions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Username).HasColumnName("username");
                entity.Property(e => e.Password).HasColumnName("password");
                entity.Property(e => e.Email).HasColumnName("email");
                entity.Property(e => e.Role).HasColumnName("role");
                entity.Property(e => e.CreatedAt).HasColumnName("created_at");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("payments");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.UserId).HasColumnName("user_id");
                entity.Property(e => e.PaymentMethod).HasColumnName("payment_method");
                entity.Property(e => e.Amount).HasColumnName("amount");
                entity.Property(e => e.PaymentStatus).HasColumnName("payment_status");
                entity.Property(e => e.PaymentDate).HasColumnName("payment_date");
            });

            modelBuilder.Entity<Author>(entity =>
            {
                entity.ToTable("authors");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Name).HasColumnName("name");
                entity.Property(e => e.Bio).HasColumnName("bio");
                entity.Property(e => e.ProfilePicture).HasColumnName("profile_picture");
                entity.Property(e => e.CreatedAt).HasColumnName("created_at");
            });

            modelBuilder.Entity<BlogPost>(entity =>
            {
                entity.ToTable("blog_posts");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Title).HasColumnName("title");
                entity.Property(e => e.Content).HasColumnName("content");
                entity.Property(e => e.AuthorId).HasColumnName("author_id");
                entity.Property(e => e.PublishDate).HasColumnName("publish_date");
                entity.Property(e => e.Category).HasColumnName("category");
                entity.Property(e => e.Tags).HasColumnName("tags");
            });

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("comments");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.PostId).HasColumnName("post_id");
                entity.Property(e => e.UserId).HasColumnName("user_id");
                entity.Property(e => e.CommentText).HasColumnName("comment_text");
                entity.Property(e => e.CommentDate).HasColumnName("comment_date");
                entity.Property(e => e.ParentCommentId).HasColumnName("parent_comment_id");
            });

            modelBuilder.Entity<Vote>(entity =>
            {
                entity.ToTable("votes");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.UserId).HasColumnName("user_id");
                entity.Property(e => e.PostId).HasColumnName("post_id");
                entity.Property(e => e.CommentId).HasColumnName("comment_id");
                entity.Property(e => e.VoteType).HasColumnName("vote_type");
                entity.Property(e => e.VoteDate).HasColumnName("vote_date");
            });

            modelBuilder.Entity<ContactSubmission>(entity =>
            {
                entity.ToTable("contact_submission");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Name).HasColumnName("name");
                entity.Property(e => e.Email).HasColumnName("email");
                entity.Property(e => e.Subject).HasColumnName("subject");
                entity.Property(e => e.Message).HasColumnName("message");
                entity.Property(e => e.CreatedAt).HasColumnName("created_at");
            });
        }
    }
}
