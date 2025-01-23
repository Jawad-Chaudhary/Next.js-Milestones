import { defineType,defineField,defineArrayMember } from "sanity" // TO get intellicence from sanity

export default defineType({
  name:"author",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      title: "Author Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required().error("Enter Author Name")
    }),
    defineField({
      title: "Bio",
      name: "bio",
      type: "text",
      description: 'Enter the author biography.'
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      description: "Insert Author Image",
      options: {
        hotspot:true,
      }
    }),
  ]
})